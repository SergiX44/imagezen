# `exif()`

```
->exif([?string $key = null]): array|string|null
```
## Parameters

- `?string $key`: 


## Returns

`array|string|null`: 

## Example

```php
use SergiX44\ImageZen\Image;

$image = Image::make('path/to/image.jpg')
    ->exif([?string $key = null]);

```