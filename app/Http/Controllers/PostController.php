<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::query();

        return inertia('Post/index', [
            'posts' => $posts->with('user')->latest()->paginate(5),
            'total' =>  $posts->count()
        ]);
    }

    public function create()
    {
        return Inertia::render('Post/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required'],
            'body' => ['required'],
            'date_post' => ['required'],
        ]);
        Post::create(
            [
                'user_id' => Auth::user()->id,
                'slug' => Str::slug($request->input('title') . '-' . Str::random(5)),
                'title' => $request->input('title'),
                'body' => $request->input('body'),
                'date_post' => $request->input('date_post'),
            ]
        );

        return redirect()->route('post.page')->with('message', $request->input('title') . " berhasil disimpan");
    }

    public function detail_post(Post $post)
    {
        return Inertia::render('Post/detail', [
            'allImages' => Image::where('post_id', $post['id'])->get(),
            'dpost' => $post
        ]);
    }

    public function update(Request $request, Post $post)
    {

        $request->validate([
            'title' => ['required'],
            'body' => ['required'],
            'date_post' => ['required'],
        ]);

        $post->update([
            'user_id' => Auth::user()->id,
            'slug' => Str::slug($request->input('title') . '-' . Str::random(5)),
            'title' => $request->input('title'),
            'body' => $request->input('body'),
            'date_post' => $request->input('date_post'),
        ]);


        return redirect()->route('post.page')->with('message', $request->input('title') . "Berhasil Di UPDATE");
    }

    public function destroy(Post $post)
    {

        // if ($post->user_id !== Auth::user()->id) {
        //     return redirect(404);
        // } else {
        $post->delete();
        return redirect()->route('post.page')->with('message', 'Data berhasil dihapus');
        // }
    }

    public function upload_image(Request $request)
    {
        $id = $request->input('post_id');
        $slug = $request->input('slug');
        $random = Str::random(6);
        $thumbnail = $request->file('image');
        //    dd($thumbnail);
        $allimg = [];
        foreach ($thumbnail as $poto) {
            foreach ($poto as $fix) {
                $name_image = $random . '-' . date('d-m-Y') . "-{$fix->getClientOriginalName()}";
                $fix->storeAs('post_image', $name_image);
                Image::create([
                    'post_id' => $id,
                    'url' => $name_image,
                    'date' => date('Y-m-d')
                ]);
            }
        }

        return redirect()->route('post.detail', $slug)->with('message', 'Foto berhasil di upload');


        // $thumbnailUrl = $thumbnail->storeAs('post_image', "{$id}.{$thumbnail->extension()}");
    }
}
