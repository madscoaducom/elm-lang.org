
{--------------------------------------------------------------------------

  Using `container` puts a box around an element, allowing you to clarify
  where it should be positioned.

    container :: Int -> Int -> Position -> Element -> Element

  The first two arguments specify the size of the container. The third
  argument is the position of the contained element. The simplest options
  for Position are:

      topLeft, topRight, bottomLeft, bottomRight :: Position
    middle, midLeft, midRight, midTop, midBottom :: Position

  If you need to set an absolute or relative position you can use:

                     middleAt :: Location -> Location -> Position
      topLeftAt, bottomLeftAt :: Location -> Location -> Position
    topRightAt, bottomRightAt :: Location -> Location -> Position

  Where Locations can be created with:

    absolute :: Int -> Location
    relative :: Float -> Location
 
--------------------------------------------------------------------------}

main =
  color grey <| container 300 300 middle <| plainText "Try this with html."