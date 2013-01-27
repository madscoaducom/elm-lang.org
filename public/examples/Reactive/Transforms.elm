
myBlue  = rgb    0  85 170
myGreen = rgba  28 267  85 0.5

scene (x,y) (w,h) =
  collage w h
    [ rotate (toFloat (x+y) / 1000) (filled myBlue (ngon 4 100 (200,200)))
    , filled myGreen (ngon 5 30 (x,y))
    ]

main = lift2 scene Mouse.position Window.dimensions
