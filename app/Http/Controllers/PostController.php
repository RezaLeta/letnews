<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

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
                'title' => $request->input('title'),
                'body' => $request->input('body'),
                'date_post' => $request->input('date_post'),
            ]
        );

        return redirect()->route('post.page')->with('message', $request->input('title') . " berhasil disimpan");
    }
}
