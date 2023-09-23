<?php

namespace SergiX44\ImageZen\Drivers\Imagick;

use SergiX44\ImageZen\Draws\Box;
use SergiX44\ImageZen\Draws\Text;
use SergiX44\ImageZen\Shapes\Point;

class ImagickText extends Text
{
    public float $kerning = 0.0;

    public function kerning(float $kerning): self
    {
        $this->kerning = $kerning;

        return $this;
    }

    public function getBox(): Box
    {
        $draw = new \ImagickDraw();
        $draw->setFont($this->fontPath);
        $draw->setFontSize($this->size);
        $draw->setTextKerning($this->kerning);
        $draw->setGravity($this->align->toImagickGravity());
        $draw->setStrokeWidth(0);
        $draw->setStrokeAntialias(false);
        $draw->setStrokeOpacity(1);
        $draw->setFillOpacity(1);
        $draw->setTextAntialias(true);
        $draw->setTextEncoding('UTF-8');

        $im = new \Imagick();
        $metrics = $im->queryFontMetrics($draw, $this->text);
        $im->destroy();

        return new Box(
            new Point($metrics['boundingBox']['x1'], $metrics['boundingBox']['y1']),
            new Point($metrics['boundingBox']['x2'], $metrics['boundingBox']['y2']),
            new Point($metrics['boundingBox']['x2'], $metrics['boundingBox']['y2']),
            new Point($metrics['boundingBox']['x2'], $metrics['boundingBox']['y2'])
        );
    }
}
