
content = [ plainText "Bears, Oh My!",
            image 200 200 "/yogi.jpg",
            image 472 315 "/shells.jpg" ]

main = flow down (map (width 150) content)