<?php

namespace App\Http\Controllers;

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
        $posts = Post::with('user')->latest()->paginate(5);

        return inertia('Post/index', [
            'posts' => $posts
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
}
