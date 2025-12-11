<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CoffeeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'description' => $this->description,
            'price' => $this->base_price,
            'size' => [
                'name' => $this->size->name ?? null,
                'ml' => $this->size->size ?? null,
            ],
            'image' => $this->image,
            'available' => $this->available,
        ];
    }
}

