<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => $this->faker->randomElement([1, 2]),
            'title' => $title = $this->faker->jobTitle(),
            'slug' => Str::slug($title) . '-' . Str::random(5),
            'body' => $this->faker->text(),
            'date_post' => $this->faker->dateTimeBetween('2020-01-01', '2022-01-01')
        ];
    }
}
