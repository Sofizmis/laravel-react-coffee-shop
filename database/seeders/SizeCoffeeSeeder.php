<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SizeCoffeeSeeder extends Seeder
{
    public function run(): void
    {
        \Illuminate\Support\Facades\DB::table('size_coffees')->insert([
            [
                'name' => 'Small',
                'size' => 150
            ],
            [
                'name' => 'Medium',
                'size' => 250
            ],
            [
                'name' => 'Large',
                'size' => 500
            ]
        ]);
    }
}
