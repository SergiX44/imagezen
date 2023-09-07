<?php

namespace SergiX44\ImageZen\Alterations;

use InvalidArgumentException;
use SergiX44\ImageZen\Alteration;
use SergiX44\ImageZen\Drivers\Gd\GdAlteration;
use SergiX44\ImageZen\Image;

class HeavyBlur extends Alteration implements GdAlteration
{
    public static string $id = 'heavyBlur';

    protected int $amount = 10;

    public function __construct(?int $amount = null)
    {
        if ($amount !== null) {
            if ($amount < 1 || $amount > 100) {
                throw new InvalidArgumentException('Heavy blur $amount must be between 1 and 100');
            }
            $this->amount = $amount;
        }
    }

    public function applyWithGd(Image $image): null
    {
        for ($i = 0; $i < $this->amount; $i++) {
            $image->blur();
            if ($i % 10 === 0) {
                imagefilter($image->getCore(), IMG_FILTER_SMOOTH, 0);
            }
        }

        return null;
    }
}