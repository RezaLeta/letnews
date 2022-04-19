<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');
        // dd($search);
        $posts = Post::query();
        if ($request->input('search')) {
            $posts->with('user')->where('title', 'LIKE', '%' . $request->input('search') . '%');
        }
        return inertia('Post/index', [
            'posts' => $posts->with('user')->orderByDesc('created_at')->paginate(5)->withQueryString(),
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

    public function delete_image_post(Image $image)
    {

        Storage::delete('post_image/' . $image['url']);
        $image->delete();
        return redirect()->route('post.page')->with('message', 'Gambar berhasil dihapus');
    }
}
