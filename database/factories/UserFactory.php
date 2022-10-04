<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

class UserFactory extends Factory
{

    protected $model = User::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $nickname = $this->faker->userName();
        $email = $this->faker->email();
        $password = Hash::make($nickname . 'akua');
        $commonname = $this->faker->name();
        return [
            'nickname' => $nickname,
            'email' => $email,
            'password' => $password,
            'commonname' => $commonname
        ];
    }
}
