
-- MODEL
mario = { x=0, y=0, vx=0, vy=0, dir="right" }


-- UPDATE -- ("m" is for Mario)
jump {y} m = if y > 0 && m.y == 0 then { m | vy <- 5 } else m
gravity t m = if m.y > 0 then { m | vy <- m.vy - t/4 } else m
move t m = { m | x <- m.x + t*m.vx , y <- max 0 (m.y + t*m.vy) }
walk {x} m = { m | vx <- x, dir <- if | x < 0     -> "left"
                                      | x > 0     -> "right"
                                      | otherwise -> m.dir }

step (t,dir) = move t . walk dir . gravity t . jump dir


-- DISPLAY
render (w,h) mario =
  let half n = n `div` 2
      verb = if | mario.y  >  0 -> "jump"
                | mario.vx /= 0 -> "walk"
                | otherwise     -> "stand"
      src  = "/imgs/mario/" ++ verb ++ "/" ++ mario.dir ++ ".gif"
  in collage w h
       [ filled (rgb 174 238 238) $ rect w h (half w, half h)
       , filled (rgb 74 163 41) $ rect w 50 (half w,h-25)
       , toForm (mario.x, (toFloat h-63)-mario.y) (image 35 35 src) ]


-- MARIO
input = let delta = lift (\t -> t/20) (fps 25)
        in sampleOn delta (lift2 (,) delta Keyboard.arrows)

main  = lift2 render Window.dimensions (foldp step mario input)
