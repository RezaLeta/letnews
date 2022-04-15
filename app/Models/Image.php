<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
    protected $fillable = ['post_id', 'url', 'date'];

    public function post()
    {
        $this->belongsTo(Post::class);
    }
}
