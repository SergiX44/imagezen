<?php

namespace SergiX44\ImageZen\Draws;

abstract class Text
{
    protected string $text;
    public ?string $fontPath;
    public int $size;
    public Color $color;
    public Position $align;
    public int $angle;

    /**
     * @param  string  $text
     * @param  int  $size
     * @param  Color|null  $color
     * @param  string|null  $fontPath
     * @param  Position  $align
     * @param  int  $angle
     */
    public function __construct(
        string $text,
        int $size = 12,
        ?Color $color = null,
        ?string $fontPath = null,
        Position $align = Position::TOP_LEFT,
        int $angle = 0,
    ) {
        $this->text = $text;
        $this->fontPath = $fontPath ?? __DIR__.'/../../assets/LiberationSans-Regular.ttf';
        $this->size = $size;
        $this->color = $color ?? Color::black();
        $this->align = $align;
        $this->angle = $angle;
    }

    abstract public function getBox(): Box;

    public function font(?string $font): self
    {
        $this->fontPath = $font;

        return $this;
    }

    public function size(int $size): self
    {
        $this->size = $size;

        return $this;
    }

    public function color(Color $color): self
    {
        $this->color = $color;

        return $this;
    }

    public function align(Position $align): self
    {
        $this->align = $align;

        return $this;
    }

    public function angle(int $angle): self
    {
        $this->angle = $angle;

        return $this;
    }

    public function hasFont(): bool
    {
        return $this->fontPath !== null && file_exists($this->fontPath);
    }
}