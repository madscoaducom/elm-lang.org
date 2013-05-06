
quadrant spc n =
    let scale = map ((*) spc)
        xs = map (\x -> (x,0)) . scale <| [0..n]
        ys = map (\y -> (0,y)) . scale <| reverse [0..n]
    in  map (traced (solid black)) (zipWith segment xs ys)

quad angle = quadrant 5 30 |> group
                           |> rotate (degrees angle)

main = collage 300 300 <| map quad [ 0, 90, 180, 270 ]