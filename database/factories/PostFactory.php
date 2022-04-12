<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Auth;

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
            'title' => $this->faker->jobTitle(),
            'body' => $this->faker->text(),
            'date_post' => $this->faker->dateTimeBetween('2020-01-01', '2022-01-01')
        ];
    }
}
