<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Coffee extends Model
{
    protected $fillable = [
        'name',
        'description',
        'base_price',
        'size_id',
        'image',
        'available',
    ];

    public function size()
    {
        return $this->belongsTo(SizeCoffee::class, 'size_id');
    }
}