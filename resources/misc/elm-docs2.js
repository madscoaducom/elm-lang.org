var elmDocs = (function () {

  var moduleToPageMap = {
    'Prelude': '/docs/Prelude.elm',
    'Maybe': '/docs/Data/Maybe.elm',
    'List': '/docs/Data/List.elm',
    'Dict': '/docs/Data/Dict.elm',
    'Either': '/docs/Data/Either.elm',
    'Set': '/docs/Data/Set.elm',
    'Char': '/docs/Data/Char.elm',
    'Javascript': '/docs/Foreign/Javascript.elm',
    'Experimental': '/docs/Foreign/Javascript/Experimental.elm',
    'JSON': '/docs/Foreign/Javascript/JSON.elm',
    'Input': '/docs/Signal/Input.elm',
    'Time': '/docs/Signal/Time.elm',
    'Mouse': '/docs/Signal/Mouse.elm',
    'HTTP': '/docs/Signal/HTTP.elm',
    'Keyboard': '/docs/Signal/Keyboard.elm',
    'KeyboardRaw': '/docs/Signal/KeyboardRaw.elm',
    'Touch': '/docs/Signal/Touch.elm',
    'Window': '/docs/Signal/Window.elm',
    'Random': '/docs/Signal/Random.elm',
    'Signal': '/docs/Signal/Signal.elm',
    'Date': '/docs/Date.elm',
    'Color': '/docs/Graphics/Color.elm',
    'Text': '/docs/Graphics/Text.elm',
    'Element': '/docs/Graphics/Element.elm',
    'Graphics': '/docs/Graphics/Element.elm',
    'JavaScript': '/docs/Foreign/JavaScript.elm',
    'Experimental': '/docs/Foreign/JavaScript/Experimental.elm',
    'JSON': '/docs/Foreign/JavaScript/JSON.elm',
    'Automaton': '/docs/Automaton.elm',
    'Syntax': '/learn/Syntax.elm' /* Pseudo module, used to open documentation when word is identified as 'keyword' by CodeMirror */
  };

  // 'name': should be equal to token.string returned by CodeMirror editors syntax mode (e.g. mode/elm.js)
  // 'type': string shown in editors type hint window. It will be prefixed with 'module.' when avaiable
  // 'module': used to lookup documentation page in moduleToPageMap

  var modules = { "modules" : [
    { "name" : "Either",
      "values" : [
      { "name" : "either",
        "type" : "(t1 -> t2) -> (t3 -> t2) -> Either t1 t3 -> t2",
        "desc" : "Apply the first function to a `Left` and the second function to a `Right`.\nThis allows the extraction of a value from an `Either`."
      },
      { "name" : "isLeft",
        "type" : "Either t1 t2 -> Bool",
        "desc" : "True if the value is a `Left`."
      },
      { "name" : "isRight",
        "type" : "Either t1 t2 -> Bool",
        "desc" : "True if the value is a `Right`."
      }
      ]
    },
      { "name" : "Prelude",
        "values" : [
        { "name" : "radians",
          "type" : "Float -> Float",
          "desc" : ""
        },
        { "name" : "degrees",
          "type" : "Float -> Float",
          "desc" : ""
        },
        { "name" : "turns",
          "type" : "Float -> Float",
          "desc" : ""
        },
        { "name" : "+",
          "type" : "Number t1 -> Number t1 -> Number t1",
          "desc" : ""
        },
        { "name" : "-",
          "type" : "Number t1 -> Number t1 -> Number t1",
          "desc" : ""
        },
        { "name" : "*",
          "type" : "Number t1 -> Number t1 -> Number t1",
          "desc" : ""
        },
        { "name" : "/",
          "type" : "Float -> Float -> Float",
          "desc" : ""
        },
        { "name" : "div",
          "type" : "Int -> Int -> Int",
          "desc" : "Integer division, remainder is discarded."
        },
        { "name" : "rem",
          "type" : "Int -> Int -> Int",
          "desc" : "Finds the remainder after dividing one number by another: 4 `rem` 3 == 1"
        },
        { "name" : "mod",
          "type" : "Int -> Int -> Int",
          "desc" : "Perform modular arithmetic: 7 `mod` 2 == 1"
        },
        { "name" : "cos",
          "type" : "Float -> Float",
          "desc" : "Basic functions of trigonometry."
        },
        { "name" : "sin",
          "type" : "Float -> Float",
          "desc" : ""
        },
        { "name" : "tan",
          "type" : "Float -> Float",
          "desc" : ""
        },
        { "name" : "acos",
          "type" : "Float -> Float",
          "desc" : ""
        },
        { "name" : "asin",
          "type" : "Float -> Float",
          "desc" : ""
        },
        { "name" : "atan",
          "type" : "Float -> Float",
          "desc" : ""
        },
        { "name" : "atan2",
          "type" : "Float -> Float -> Float",
          "desc" : "Returns the arctangent of the quotient of its arguments in radians.\nSo `atan2 y x` computes the angle from the positive x-axis to the vector\nstarting at the origin and ending at (x,y)."
        },
        { "name" : "sqrt",
          "type" : "Number t1 -> Number t1",
          "desc" : "Take the square root of a number."
        },
        { "name" : "abs",
          "type" : "Number t1 -> Number t1",
          "desc" : "Take the absolute value of a number."
        },
        { "name" : "logBase",
          "type" : "Number t1 -> Number t1 -> Number t1",
          "desc" : "Calculate the logarithm of a number with a given base: `logBase 10 100 == 2`"
        },
        { "name" : "min",
          "type" : "Number t1 -> Number t1 -> Number t1",
          "desc" : "Given two numbers, returns the smaller (or greater respectively)."
        },
        { "name" : "max",
          "type" : "Number t1 -> Number t1 -> Number t1",
          "desc" : ""
        },
        { "name" : "clamp",
          "type" : "Number t1 -> Number t1 -> Number t1 -> Number t1",
          "desc" : "Clamps a number within a given range, so `clamp 100 200 x` is 200 for\nx >= 200, 100 for x <= 100, and x for any 100 < x < 200 "
        },
        { "name" : "pi",
          "type" : "Float",
          "desc" : "An approximation of pi."
        },
        { "name" : "e",
          "type" : "Float",
          "desc" : "An approximation of e."
        },
        { "name" : "==",
          "type" : "Comparable t1 -> Comparable t1 -> Bool",
          "desc" : "Compare any two values for structural equality and inequality.\nFunctions cannot be compared."
        },
        { "name" : "/=",
          "type" : "Comparable t1 -> Comparable t1 -> Bool",
          "desc" : ""
        },
        { "name" : "<",
          "type" : "Comparable t1 -> Comparable t1 -> Bool",
          "desc" : "Compare any two comparable values. Comparable values include String, Char,\nInt, Float, Time, or a list or tuple containing comparable values.\nThese are also the only values that work as Dictionary keys or Set members."
        },
        { "name" : ">",
          "type" : "Comparable t1 -> Comparable t1 -> Bool",
          "desc" : ""
        },
        { "name" : "<=",
          "type" : "Comparable t1 -> Comparable t1 -> Bool",
          "desc" : ""
        },
        { "name" : ">=",
          "type" : "Comparable t1 -> Comparable t1 -> Bool",
          "desc" : ""
        },
        { "name" : "compare",
          "type" : "Comparable t1 -> Comparable t1 -> Order",
          "desc" : ""
        },
        { "name" : "&&",
          "type" : "Bool -> Bool -> Bool",
          "desc" : "The and operator. True if both inputs are True."
        },
        { "name" : "||",
          "type" : "Bool -> Bool -> Bool",
          "desc" : "The or operator. True if one or both inputs are True."
        },
        { "name" : "xor",
          "type" : "Bool -> Bool -> Bool",
          "desc" : "The exclusive-or operator. True if exactly one input is True."
        },
        { "name" : "not",
          "type" : "Bool -> Bool",
          "desc" : "Negate a boolean value: (not True == False) and (not False == True)"
        },
        { "name" : "otherwise",
          "type" : "Bool",
          "desc" : "Equal to true. Useful as the last case of a multi-way-if."
        },
        { "name" : "round",
          "type" : "Float -> Int",
          "desc" : "Round a number to the nearest integer."
        },
        { "name" : "truncate",
          "type" : "Float -> Int",
          "desc" : "Truncate a decimal number, rounding towards zero."
        },
        { "name" : "floor",
          "type" : "Float -> Int",
          "desc" : "Floor function, rounding down."
        },
        { "name" : "ceiling",
          "type" : "Float -> Int",
          "desc" : "Ceiling function, rounding up."
        },
        { "name" : "toFloat",
          "type" : "Int -> Float",
          "desc" : "Convert an integer into a float."
        },
        { "name" : "show",
          "type" : "t1 -> String",
          "desc" : "Convert almost any value to its string representation."
        },
        { "name" : "readInt",
          "type" : "String -> Maybe Int",
          "desc" : "Read an integer from a string"
        },
        { "name" : "readFloat",
          "type" : "String -> Maybe Float",
          "desc" : "Read a float from a string."
        },
        { "name" : ".",
          "type" : "(t1 -> t2) -> (t3 -> t1) -> t3 -> t2",
          "desc" : "Function composition: f . g == (\\x -> f (g x))"
        },
        { "name" : "$",
          "type" : "(t1 -> t2) -> t1 -> t2",
          "desc" : "Function application `f $ x == f x`. This function is useful for avoiding\nparenthesis. Consider the following code to create a text element:\n    text (monospace (toText \"code\"))\nThis can also be written as:\n    text . monospace $ toText \"code\""
        },
        { "name" : "id",
          "type" : "t1 -> t1",
          "desc" : "Given a value, returns exactly the same value."
        },
        { "name" : "fst",
          "type" : "(t1,t2) -> t1",
          "desc" : "Given a 2-tuple, returns the first value."
        },
        { "name" : "snd",
          "type" : "(t1,t2) -> t2",
          "desc" : "Given a 2-tuple, returns the second value."
        },
        { "name" : "flip",
          "type" : "(t1 -> t2 -> t3) -> t2 -> t1 -> t3",
          "desc" : "Flips the order of the first two arguments to a function."
        },
        { "name" : "curry",
          "type" : "((t1,t2) -> t3) -> t1 -> t2 -> t3",
          "desc" : "Change how arguments are passed to a function. This splits paired arguments\ninto two separate arguments."
        },
        { "name" : "uncurry",
          "type" : "(t1 -> t2 -> t3) -> (t1,t2) -> t3",
          "desc" : "Change how arguments are passed to a function. This combines two arguments\ninto a sigle pair."
        }
        ]
      },
      { "name" : "Time",
        "values" : [
        { "name" : "ms",
          "type" : "Time",
          "desc" : ""
        },
        { "name" : "second",
          "type" : "Time",
          "desc" : ""
        },
        { "name" : "minute",
          "type" : "Time",
          "desc" : ""
        },
        { "name" : "hour",
          "type" : "Time",
          "desc" : ""
        },
        { "name" : "inMss",
          "type" : "Time -> Float",
          "desc" : ""
        },
        { "name" : "inSeconds",
          "type" : "Time -> Float",
          "desc" : ""
        },
        { "name" : "inMinutes",
          "type" : "Time -> Float",
          "desc" : ""
        },
        { "name" : "inHours",
          "type" : "Time -> Float",
          "desc" : ""
        },
        { "name" : "fps",
          "type" : "Number t1 -> Signal Time",
          "desc" : "Takes desired number of frames per second (fps). The resulting signal\ngives a sequence of time deltas as quickly as possible until it reaches\nthe desired FPS. A time delta is the time between the last frame and the\ncurrent frame."
        },
        { "name" : "fpsWhen",
          "type" : "Number t1 -> Signal Bool -> Signal Time",
          "desc" : "Same as the fps function, but you can turn it on and off. Allows you\nto do brief animations based on user input without major ineffeciencies.\nThe first time delta after a pause is always zero, no matter how long\nthe pause was. This way summing the deltas will actually give the amount\nof time that the output signal has been running."
        },
        { "name" : "every",
          "type" : "Time -> Signal Time",
          "desc" : "Takes a time interval t. The resulting signal is the current time,\nupdated every t."
        },
        { "name" : "since",
          "type" : "Time -> Signal t1 -> Signal Bool",
          "desc" : "Takes a time `t` and any signal. The resulting boolean signal\nis true for time `t` after every event on the input signal.\nSo ``(second `since` Mouse.clicks)`` would result in a signal\nthat is true for one second after each mouse click and false\notherwise."
        }
        ]
      },
      { "name" : "Maybe",
        "values" : [
        { "name" : "maybe",
          "type" : "t1 -> (t2 -> t1) -> Maybe t2 -> t1",
          "desc" : "Apply a function to the contents of a `Maybe`.\nReturn default when given `Nothing`."
        },
        { "name" : "isJust",
          "type" : "Maybe t1 -> Bool",
          "desc" : "Check if constructed with `Just`."
        },
        { "name" : "isNothing",
          "type" : "Maybe t1 -> Bool",
          "desc" : "Check if constructed with `Nothing`."
        },
        { "name" : "cons",
          "type" : "Maybe t1 -> [t1] -> [t1]",
          "desc" : "If `Just`, adds the value to the front of the list.\nIf `Nothing`, list is unchanged."
        },
        { "name" : "justs",
          "type" : "[Maybe t1] -> [t1]",
          "desc" : "Filters out Nothings and extracts the remaining values."
        }
        ]
      },
      { "name" : "JavaScript",
        "values" : [
        { "name" : "toString",
          "type" : "JSString -> String",
          "desc" : ""
        },
        { "name" : "toList",
          "type" : "JSArray t1 -> [t1]",
          "desc" : "Requires that the input array be uniform (all members have the same type)"
        },
        { "name" : "toInt",
          "type" : "JSNumber -> Int",
          "desc" : ""
        },
        { "name" : "toFloat",
          "type" : "JSNumber -> Float",
          "desc" : ""
        },
        { "name" : "toBool",
          "type" : "JSBool -> Bool",
          "desc" : "Conversion from JavaScript boolean values to Elm boolean values."
        },
        { "name" : "fromString",
          "type" : "String -> JSString",
          "desc" : ""
        },
        { "name" : "fromList",
          "type" : "[t1] -> JSArray t1",
          "desc" : "Produces a uniform JavaScript array with all members of the same type."
        },
        { "name" : "fromInt",
          "type" : "Int -> JSNumber",
          "desc" : ""
        },
        { "name" : "fromFloat",
          "type" : "Float -> JSNumber",
          "desc" : ""
        },
        { "name" : "fromBool",
          "type" : "Bool -> JSBool",
          "desc" : "Conversion from Elm boolean values to JavaScript boolean values."
        }
        ]
      },
      { "name" : "WebSocket",
        "values" : [
        { "name" : "open",
          "type" : "String -> Signal String -> Signal String",
          "desc" : "Create a web-socket. The first argument is the URL of the desired\nweb-socket server. The input signal holds the outgoing messages,\nand the resulting signal contains the incoming ones."
        }
        ]
      },
      { "name" : "Touch",
        "values" : [
        { "name" : "touches",
          "type" : "Signal [Touch]",
          "desc" : "A list of touches. Each ongoing touch is represented by a set of\ncoordinates and an identifier id that allows you to distinguish\nbetween different touches. Each touch also contains the coordinates and\ntime of the initial contact (x0, y0, and t0) which helps compute more\ncomplicated gestures."
        },
        { "name" : "taps",
          "type" : "Signal ({ x : Int, y : Int })",
          "desc" : "The last position that was tapped. Default value is `{x=0,y=0}`.\nUpdates whenever the user taps the screen."
        }
        ]
      },
      { "name" : "List",
        "values" : [
        { "name" : "::",
          "type" : "t1 -> [t1] -> [t1]",
          "desc" : "Add an element to the front of a list \n    a :: [b,c] = [a,b,c]"
        },
        { "name" : "++",
          "type" : "Appendable t1 -> Appendable t1 -> Appendable t1",
          "desc" : "Appends two lists."
        },
        { "name" : "head",
          "type" : "[t1] -> t1",
          "desc" : "Extract the first element of a list. List must be non-empty."
        },
        { "name" : "tail",
          "type" : "[t1] -> [t1]",
          "desc" : "Extract the elements after the head of the list. List must be non-empty."
        },
        { "name" : "last",
          "type" : "[t1] -> t1",
          "desc" : "Extract the last element of a list. List must be non-empty."
        },
        { "name" : "map",
          "type" : "(t1 -> t2) -> [t1] -> [t2]",
          "desc" : "Apply a function to every element of a list."
        },
        { "name" : "foldl",
          "type" : "(t1 -> t2 -> t2) -> t2 -> [t1] -> t2",
          "desc" : "Reduce a list from the left."
        },
        { "name" : "foldr",
          "type" : "(t1 -> t2 -> t2) -> t2 -> [t1] -> t2",
          "desc" : "Reduce a list from the right."
        },
        { "name" : "foldl1",
          "type" : "(t1 -> t1 -> t1) -> [t1] -> t1",
          "desc" : "Reduce a list from the left without a base case. List must be non-empty."
        },
        { "name" : "foldr1",
          "type" : "(t1 -> t1 -> t1) -> [t1] -> t1",
          "desc" : "Reduce a list from the right without a base case. List must be non-empty."
        },
        { "name" : "scanl",
          "type" : "(t1 -> t2 -> t2) -> t2 -> [t1] -> [t2]",
          "desc" : "Reduce a list from the left, building up all of the intermediate results into a list."
        },
        { "name" : "scanl1",
          "type" : "(t1 -> t1 -> t1) -> [t1] -> [t1]",
          "desc" : "Same as scanl but it doesn't require a base case. List must be non-empty."
        },
        { "name" : "filter",
          "type" : "(t1 -> Bool) -> [t1] -> [t1]",
          "desc" : "Filter out elements which do not satisfy the predicate."
        },
        { "name" : "length",
          "type" : "[t1] -> Int",
          "desc" : "Determine the length of a list."
        },
        { "name" : "reverse",
          "type" : "[t1] -> [t1]",
          "desc" : "Reverse a list."
        },
        { "name" : "all",
          "type" : "(t1 -> Bool) -> [t1] -> Bool",
          "desc" : "Check to see if all elements satisfy the predicate."
        },
        { "name" : "any",
          "type" : "(t1 -> Bool) -> [t1] -> Bool",
          "desc" : "Check to see if any elements satisfy the predicate."
        },
        { "name" : "and",
          "type" : "[Bool] -> Bool",
          "desc" : "Check to see if all elements are True."
        },
        { "name" : "or",
          "type" : "[Bool] -> Bool",
          "desc" : "Check to see if any elements are True."
        },
        { "name" : "concat",
          "type" : "[Appendable t1] -> Appendable t1",
          "desc" : "Flatten a list of lists."
        },
        { "name" : "concatMap",
          "type" : "(t1 -> Appendable t2) -> [t1] -> Appendable t2",
          "desc" : "Map a given function onto a list and flatten the resulting lists.\n\n    concatMap f xs == concat (map f xs)"
        },
        { "name" : "partition",
          "type" : "(t1 -> Bool) -> [t1] -> ([t1],[t1])",
          "desc" : "Split a list based on the predicate."
        },
        { "name" : "zip",
          "type" : "[t1] -> [t2] -> [(t1,t2)]",
          "desc" : "Combine two lists, combining them into tuples pairwise. If one input list has extra elements (it is longer), those elements are dropped."
        },
        { "name" : "zipWith",
          "type" : "(t1 -> t2 -> t3) -> [t1] -> [t2] -> [t3]",
          "desc" : "Combine two lists, combining them with the given function. If one input list has extra elements (it is longer), those elements are dropped."
        },
        { "name" : "unzip",
          "type" : "[(t1,t2)] -> ([t1],[t2])",
          "desc" : "Decompose a list of tuples"
        },
        { "name" : "split",
          "type" : "[t1] -> [t1] -> [[t1]]",
          "desc" : "Split a list\n    split \",\" \"hello,there,friend\" == [\"hello\", \"there\", \"friend\"]"
        },
        { "name" : "join",
          "type" : "Appendable t1 -> [Appendable t1] -> Appendable t1",
          "desc" : "Places the given value between all of the lists in the second argument\nand concatenates the result. \n\n    join xs xss = concat (intersperse xs xss)"
        },
        { "name" : "intersperse",
          "type" : "t1 -> [t1] -> [t1]",
          "desc" : "Places the given value between all members of the given list."
        },
        { "name" : "take",
          "type" : "Int -> [t1] -> [t1]",
          "desc" : "Take the first n members of a list.\n    take 2 [1,2,3,4]) ==> [1,2]"
        },
        { "name" : "drop",
          "type" : "Int -> [t1] -> [t1]",
          "desc" : "Drop the first n members of a list. \n    drop 2 [1,2,3,4]) ==> [3,4]"
        }
        ]
      },
      { "name" : "Mouse",
        "values" : [
        { "name" : "position",
          "type" : "Signal (Int,Int)",
          "desc" : "The current mouse position."
        },
        { "name" : "x",
          "type" : "Signal Int",
          "desc" : "The current x-coordinate of the mouse."
        },
        { "name" : "y",
          "type" : "Signal Int",
          "desc" : "The current y-coordinate of the mouse."
        },
        { "name" : "isDown",
          "type" : "Signal Bool",
          "desc" : "The current state of the left mouse-button.\nTrue when the button is down, and false otherwise."
        },
        { "name" : "isClicked",
          "type" : "Signal Bool",
          "desc" : "True immediately after the left mouse-button has been clicked,\nand false otherwise."
        },
        { "name" : "clicks",
          "type" : "Signal ()",
          "desc" : "Always equal to unit. Event triggers on every mouse click."
        }
        ]
      },
      { "name" : "Dict",
        "values" : [
        { "name" : "empty",
          "type" : "Dict (Comparable t1) t2",
          "desc" : "Create an empty dictionary."
        },
        { "name" : "min",
          "type" : "Dict t1 t2 -> (t1,t2)",
          "desc" : ""
        },
        { "name" : "lookup",
          "type" : "Comparable t1 -> Dict (Comparable t1) t3 -> Maybe t3",
          "desc" : "Lookup the value associated with a key."
        },
        { "name" : "findWithDefault",
          "type" : "t1 -> Comparable t2 -> Dict (Comparable t2) t1 -> t1",
          "desc" : "Find the value associated with a key. If the key is not found,\nreturn the default value."
        },
        { "name" : "member",
          "type" : "Comparable t1 -> Dict (Comparable t1) t3 -> Bool",
          "desc" : "Determine if a key is in a dictionary."
        },
        { "name" : "rotateLeft",
          "type" : "Dict t1 t2 -> Dict t1 t2",
          "desc" : ""
        },
        { "name" : "rotateRight",
          "type" : "Dict t1 t2 -> Dict t1 t2",
          "desc" : "rotateRight -- the reverse, and \nmakes Y have Z's color, and makes Z Red."
        },
        { "name" : "rotateLeftIfNeeded",
          "type" : "Dict t1 t2 -> Dict t1 t2",
          "desc" : ""
        },
        { "name" : "rotateRightIfNeeded",
          "type" : "Dict t1 t2 -> Dict t1 t2",
          "desc" : ""
        },
        { "name" : "color_flip",
          "type" : "Dict t1 t2 -> Dict t1 t2",
          "desc" : ""
        },
        { "name" : "color_flipIfNeeded",
          "type" : "Dict t1 t2 -> Dict t1 t2",
          "desc" : ""
        },
        { "name" : "ensureBlackRoot",
          "type" : "Dict t1 t2 -> Dict t1 t2",
          "desc" : ""
        },
        { "name" : "insert",
          "type" : "Comparable t1 -> t2 -> Dict (Comparable t1) t2 -> Dict (Comparable t1) t2",
          "desc" : "Insert a key-value pair into a dictionary. Replaces value when there is\na collision."
        },
        { "name" : "singleton",
          "type" : "Comparable t1 -> t2 -> Dict (Comparable t1) t2",
          "desc" : "Create a dictionary with one key-value pair."
        },
        { "name" : "isRed",
          "type" : "Dict t1 t2 -> Bool",
          "desc" : ""
        },
        { "name" : "isRedLeft",
          "type" : "Dict t1 t2 -> Bool",
          "desc" : ""
        },
        { "name" : "isRedLeftLeft",
          "type" : "Dict t1 t2 -> Bool",
          "desc" : ""
        },
        { "name" : "isRedRight",
          "type" : "Dict t1 t2 -> Bool",
          "desc" : ""
        },
        { "name" : "isRedRightLeft",
          "type" : "Dict t1 t2 -> Bool",
          "desc" : ""
        },
        { "name" : "moveRedLeft",
          "type" : "Dict t1 t2 -> Dict t1 t2",
          "desc" : ""
        },
        { "name" : "moveRedRight",
          "type" : "Dict t1 t2 -> Dict t1 t2",
          "desc" : ""
        },
        { "name" : "moveRedLeftIfNeeded",
          "type" : "Dict t1 t2 -> Dict t1 t2",
          "desc" : ""
        },
        { "name" : "moveRedRightIfNeeded",
          "type" : "Dict t1 t2 -> Dict t1 t2",
          "desc" : ""
        },
        { "name" : "deleteMin",
          "type" : "Dict t1 t2 -> Dict t1 t2",
          "desc" : ""
        },
        { "name" : "remove",
          "type" : "Comparable t1 -> Dict (Comparable t1) t3 -> Dict (Comparable t1) t3",
          "desc" : "Remove a key-value pair from a dictionary. If the key is not found,\nno changes are made."
        },
        { "name" : "map",
          "type" : "(t1 -> t2) -> Dict (Comparable t3) t1 -> Dict (Comparable t3) t2",
          "desc" : "Apply a function to all values in a dictionary."
        },
        { "name" : "foldl",
          "type" : "(Comparable t1 -> t2 -> t3 -> t3) -> t3 -> Dict (Comparable t1) t2 -> t3",
          "desc" : "Fold over the key-value pairs in a dictionary, in order from lowest\nkey to highest key."
        },
        { "name" : "foldr",
          "type" : "(Comparable t1 -> t2 -> t3 -> t3) -> t3 -> Dict (Comparable t1) t2 -> t3",
          "desc" : "Fold over the key-value pairs in a dictionary, in order from highest\nkey to lowest key."
        },
        { "name" : "union",
          "type" : "Dict (Comparable t1) t2 -> Dict (Comparable t1) t2 -> Dict (Comparable t1) t2",
          "desc" : "Combine two dictionaries. If there is a collision, preference is given\nto the first dictionary."
        },
        { "name" : "intersect",
          "type" : "Dict (Comparable t1) t2 -> Dict (Comparable t1) t2 -> Dict (Comparable t1) t2",
          "desc" : "Keep a key-value pair when its key appears in the second dictionary.\nPreference is given to values in the first dictionary."
        },
        { "name" : "diff",
          "type" : "Dict (Comparable t1) t2 -> Dict (Comparable t1) t2 -> Dict (Comparable t1) t2",
          "desc" : "Keep a key-value pair when its key does not appear in the second dictionary.\nPreference is given to the first dictionary."
        },
        { "name" : "keys",
          "type" : "Dict (Comparable t1) t2 -> [Comparable t1]",
          "desc" : "Get all of the keys in a dictionary."
        },
        { "name" : "values",
          "type" : "Dict (Comparable t1) t2 -> [t2]",
          "desc" : "Get all of the values in a dictionary."
        },
        { "name" : "toList",
          "type" : "Dict (Comparable t1) t2 -> [(Comparable t1,t2)]",
          "desc" : "Convert a dictionary into an association list of key-value pairs."
        },
        { "name" : "fromList",
          "type" : "[(Comparable t1,t2)] -> Dict (Comparable t1) t2",
          "desc" : "Convert an association list into a dictionary."
        }
        ]
      },
      { "name" : "Window",
        "values" : [
        { "name" : "dimensions",
          "type" : "Signal (Int,Int)",
          "desc" : "The current dimensions of the window (i.e. the area viewable to the\nuser, not including scroll bars)."
        },
        { "name" : "width",
          "type" : "Signal Int",
          "desc" : "The current width of the window."
        },
        { "name" : "height",
          "type" : "Signal Int",
          "desc" : "The current height of the window."
        }
        ]
      },
      { "name" : "Set",
        "values" : [
        { "name" : "empty",
          "type" : "Set (Comparable t1)",
          "desc" : "Create an empty set."
        },
        { "name" : "singleton",
          "type" : "Comparable t1 -> Set (Comparable t1)",
          "desc" : "Create a set with one value."
        },
        { "name" : "insert",
          "type" : "Comparable t1 -> Set (Comparable t1) -> Set (Comparable t1)",
          "desc" : "Insert a value into a set."
        },
        { "name" : "remove",
          "type" : "Comparable t1 -> Set (Comparable t1) -> Set (Comparable t1)",
          "desc" : "Remove a value from a set. If the value is not found, no changes are made."
        },
        { "name" : "member",
          "type" : "Comparable t1 -> Set (Comparable t1) -> Bool",
          "desc" : "Determine if a value is in a set."
        },
        { "name" : "union",
          "type" : "Set (Comparable t1) -> Set (Comparable t1) -> Set (Comparable t1)",
          "desc" : "Get the union of two sets. Keep all values."
        },
        { "name" : "intersect",
          "type" : "Set (Comparable t1) -> Set (Comparable t1) -> Set (Comparable t1)",
          "desc" : "Get the intersection of two sets. Keeps values that appear in both sets."
        },
        { "name" : "diff",
          "type" : "Set (Comparable t1) -> Set (Comparable t1) -> Set (Comparable t1)",
          "desc" : "Get the difference between the first set and the second. Keeps values\nthat do not appear in the second set."
        },
        { "name" : "toList",
          "type" : "Set (Comparable t1) -> [Comparable t1]",
          "desc" : "Convert a set into a list."
        },
        { "name" : "fromList",
          "type" : "[Comparable t1] -> Set (Comparable t1)",
          "desc" : "Convert a list into a set, removing any duplicates."
        },
        { "name" : "foldl",
          "type" : "(Comparable t1 -> t2 -> t2) -> t2 -> Set (Comparable t1) -> t2",
          "desc" : "Fold over the values in a set, in order from lowest to highest."
        },
        { "name" : "foldr",
          "type" : "(Comparable t1 -> t2 -> t2) -> t2 -> Set (Comparable t1) -> t2",
          "desc" : "Fold over the values in a set, in order from highest to lowest."
        },
        { "name" : "map",
          "type" : "(Comparable t1 -> Comparable t2) -> Set (Comparable t1) -> Set (Comparable t2)",
          "desc" : "Map a function onto a set, creating a new set with no duplicates."
        }
        ]
      },
      { "name" : "Keyboard",
        "values" : [
        { "name" : "arrows",
          "type" : "Signal ({ x : Int, y : Int })",
          "desc" : "A signal of records indicating which arrow keys are pressed.\n\n`{ x = 0, y = 0 }` when pressing no arrows.\n`{ x =-1, y = 0 }` when pressing the left arrow.\n`{ x = 1, y = 1 }` when pressing the up and right arrows.\n`{ x = 0, y =-1 }` when pressing the down, left, and right arrows."
        },
        { "name" : "wasd",
          "type" : "Signal ({ x : Int, y : Int })",
          "desc" : "Just like the arrows signal, but this uses keys w, a, s, and d,\nwhich are common controls for many computer games."
        },
        { "name" : "directions",
          "type" : "KeyCode -> KeyCode -> KeyCode -> KeyCode -> Signal ({ x : Int, y : Int })",
          "desc" : "Custom key directions so that you can support different locales.\nThe plan is to have a locale independent version of this function\nthat uses the physical location of keys, but I don't know how to do it."
        },
        { "name" : "isDown",
          "type" : "KeyCode -> Signal Bool",
          "desc" : "Whether an arbitrary key is pressed."
        },
        { "name" : "shift",
          "type" : "Signal Bool",
          "desc" : "Whether the shift key is pressed."
        },
        { "name" : "ctrl",
          "type" : "Signal Bool",
          "desc" : "Whether the control key is pressed."
        },
        { "name" : "space",
          "type" : "Signal Bool",
          "desc" : "Whether the space key is pressed."
        },
        { "name" : "enter",
          "type" : "Signal Bool",
          "desc" : "Whether the enter key is pressed."
        },
        { "name" : "keysDown",
          "type" : "Signal [KeyCode]",
          "desc" : "List of keys that are currently down."
        },
        { "name" : "lastPressed",
          "type" : "Signal Char",
          "desc" : "The latest key that has been pressed."
        }
        ]
      },
      { "name" : "Date",
        "values" : [
        { "name" : "read",
          "type" : "String -> Maybe Date",
          "desc" : "Attempt to read a date from a string."
        },
        { "name" : "toTime",
          "type" : "Date -> Time",
          "desc" : "Convert a date into a time since midnight (UTC) of 1 January 1990 (i.e.\n[UNIX time](http://en.wikipedia.org/wiki/Unix_time)). Given the date 23 June\n1990 at 11:45AM this returns the corresponding time."
        },
        { "name" : "year",
          "type" : "Date -> Int",
          "desc" : "Extract the year of a given date. Given the date 23 June 1990 at 11:45AM\nthis returns the integer `1990`."
        },
        { "name" : "month",
          "type" : "Date -> Month",
          "desc" : "Extract the month of a given date. Given the date 23 June 1990 at 11:45AM\nthis returns the Month `Jun` as defined below."
        },
        { "name" : "day",
          "type" : "Date -> Int",
          "desc" : "Extract the day of a given date. Given the date 23 June 1990 at 11:45AM\nthis returns the integer `23`."
        },
        { "name" : "dayOfWeek",
          "type" : "Date -> Day",
          "desc" : "Extract the day of the week for a given date. Given the date 23 June\n1990 at 11:45AM this returns the Day `Thu` as defined below."
        },
        { "name" : "hour",
          "type" : "Date -> Int",
          "desc" : "Extract the hour of a given date. Given the date 23 June 1990 at 11:45AM\nthis returns the integer `11`."
        },
        { "name" : "minute",
          "type" : "Date -> Int",
          "desc" : "Extract the minute of a given date. Given the date 23 June 1990 at 11:45AM\nthis returns the integer `45`."
        },
        { "name" : "second",
          "type" : "Date -> Int",
          "desc" : "Extract the second of a given date. Given the date 23 June 1990 at 11:45AM\nthis returns the integer `0`."
        }
        ]
      },
      { "name" : "Random",
        "values" : [
        { "name" : "range",
          "type" : "Int -> Int -> Signal t1 -> Signal Int",
          "desc" : "Given a range from low to high and a signal of values, this produces\na new signal that changes whenever the input signal changes. The new\nvalues are random number between 'low' and 'high' inclusive."
        },
        { "name" : "float",
          "type" : "Signal t1 -> Signal Float",
          "desc" : "Produces a new signal that changes whenever the input signal changes.\nThe new values are random number in [0..1)."
        }
        ]
      },
      { "name" : "Json",
        "values" : [
        { "name" : "toString",
          "type" : "Value -> String",
          "desc" : "Convert a proper JSON object into a string."
        },
        { "name" : "toPrettyString",
          "type" : "String -> Value -> String",
          "desc" : "Convert a proper JSON object into a prettified string.\nThe first argument is a separator token (e.g. \\\" \\\", \\\"\\\\n\\\", etc.) that will\nbe used for indentation in the prettified string version of the JSON object."
        },
        { "name" : "toJSString",
          "type" : "Value -> JSString",
          "desc" : "Convert a proper JSON object into a JavaScript string.\nNote that the type JSString seen here is not the same as the type constructor\nJsonString used elsewhere in this module."
        },
        { "name" : "fromString",
          "type" : "String -> Maybe Value",
          "desc" : "Parse a string representation of a proper JSON object into\nits Elm's representation."
        },
        { "name" : "fromJSString",
          "type" : "JSString -> Maybe Value",
          "desc" : "Parse a JavaScript string representation of a proper JSON object into\nits Elm's representation."
        },
        { "name" : "string",
          "type" : "Value -> String",
          "desc" : ""
        },
        { "name" : "number",
          "type" : "Value -> Float",
          "desc" : ""
        },
        { "name" : "boolean",
          "type" : "Value -> Bool",
          "desc" : ""
        },
        { "name" : "array",
          "type" : "Value -> [Value]",
          "desc" : ""
        },
        { "name" : "object",
          "type" : "Value -> Dict String Value",
          "desc" : ""
        },
        { "name" : "findString",
          "type" : "String -> Dict String Value -> String",
          "desc" : "Find a string value in an Elm Json object. If the key is not found or the\nvalue found is not a string, this returns the empty string."
        },
        { "name" : "findNumber",
          "type" : "String -> Dict String Value -> Float",
          "desc" : "Find a number value in an Elm Json object. If the key is not found or the\nvalue found is not a number, this returns 0"
        },
        { "name" : "findBoolean",
          "type" : "String -> Dict String Value -> Bool",
          "desc" : "Find a boolean value in an Elm Json object. If the key is not found or the\nvalue found is not a boolean, this returns the False."
        },
        { "name" : "findArray",
          "type" : "String -> Dict String Value -> [Value]",
          "desc" : "Find an array value in an Elm Json object. If the key is not found or the\nvalue found is not an array, this returns an empty list."
        },
        { "name" : "findObject",
          "type" : "String -> Dict String Value -> Dict String Value",
          "desc" : "Find an object value in an Elm Json object. If the key is not found or the\nvalue found is not an object, this returns an empty object."
        }
        ]
      },
      { "name" : "Signal",
        "values" : [
        { "name" : "constant",
          "type" : "t1 -> Signal t1",
          "desc" : "Create a constant signal that never changes."
        },
        { "name" : "lift",
          "type" : "(t1 -> t2) -> Signal t1 -> Signal t2",
          "desc" : "Transform a signal with a given function."
        },
        { "name" : "lift2",
          "type" : "(t1 -> t2 -> t3) -> Signal t1 -> Signal t2 -> Signal t3",
          "desc" : "Combine two signals with a given function."
        },
        { "name" : "lift3",
          "type" : "(t1 -> t2 -> t3 -> t4) -> Signal t1 -> Signal t2 -> Signal t3 -> Signal t4",
          "desc" : "Combine three signals with a given function."
        },
        { "name" : "lift4",
          "type" : "(t1 -> t2 -> t3 -> t4 -> t5) -> Signal t1 -> Signal t2 -> Signal t3 -> Signal t4 -> Signal t5",
          "desc" : ""
        },
        { "name" : "lift5",
          "type" : "(t1 -> t2 -> t3 -> t4 -> t5 -> t6) -> Signal t1 -> Signal t2 -> Signal t3 -> Signal t4 -> Signal t5 -> Signal t6",
          "desc" : ""
        },
        { "name" : "lift6",
          "type" : "(t1 -> t2 -> t3 -> t4 -> t5 -> t6 -> t7) -> Signal t1 -> Signal t2 -> Signal t3 -> Signal t4 -> Signal t5 -> Signal t6 -> Signal t7",
          "desc" : ""
        },
        { "name" : "lift7",
          "type" : "(t1 -> t2 -> t3 -> t4 -> t5 -> t6 -> t7 -> t8) -> Signal t1 -> Signal t2 -> Signal t3 -> Signal t4 -> Signal t5 -> Signal t6 -> Signal t7 -> Signal t8",
          "desc" : ""
        },
        { "name" : "lift8",
          "type" : "(t1 -> t2 -> t3 -> t4 -> t5 -> t6 -> t7 -> t8 -> t9) -> Signal t1 -> Signal t2 -> Signal t3 -> Signal t4 -> Signal t5 -> Signal t6 -> Signal t7 -> Signal t8 -> Signal t9",
          "desc" : ""
        },
        { "name" : "foldp",
          "type" : "(t1 -> t2 -> t2) -> t2 -> Signal t1 -> Signal t2",
          "desc" : "Create a past-dependent signal. Each value given on the input signal will\nbe accumulated, producing a new output value.\n\nFor instance, `(foldp (\\\\t acc -> acc + 1) 0 (Time.every second))` increments every second."
        },
        { "name" : "merge",
          "type" : "Signal t1 -> Signal t1 -> Signal t1",
          "desc" : "Merge two signals into one, biased towards the first signal if both signals\nupdate at the same time."
        },
        { "name" : "merges",
          "type" : "[Signal t1] -> Signal t1",
          "desc" : "Merge many signals into one, biased towards the left-most signal if multiple\nsignals update simultaneously."
        },
        { "name" : "combine",
          "type" : "[Signal t1] -> Signal [t1]",
          "desc" : ""
        },
        { "name" : "mergeEither",
          "type" : "Signal t1 -> Signal t2 -> Signal (Either t1 t2)",
          "desc" : "Merge two signals into one, but distinguishing the values by marking the first\nsignal as `Left` and the second signal as `Right`. This allows you to easily\nfold over non-homogeneous inputs."
        },
        { "name" : "count",
          "type" : "Signal t1 -> Signal Int",
          "desc" : "Count the number of events that have occured."
        },
        { "name" : "countIf",
          "type" : "(t1 -> Bool) -> Signal t1 -> Signal Int",
          "desc" : "Count the number of events that have occured that satisfy a given predicate."
        },
        { "name" : "keepIf",
          "type" : "(t1 -> Bool) -> t1 -> Signal t1 -> Signal t1",
          "desc" : "Keep only events that satisfy the given predicate. Elm does not allow\nundefined signals, so a base case must be provided in case the predicate is\nnever satisfied."
        },
        { "name" : "dropIf",
          "type" : "(t1 -> Bool) -> t1 -> Signal t1 -> Signal t1",
          "desc" : "Drop events that satisfy the given predicate. Elm does not allow undefined\nsignals, so a base case must be provided in case the predicate is never\nsatisfied."
        },
        { "name" : "keepWhen",
          "type" : "Signal Bool -> t1 -> Signal t1 -> Signal t1",
          "desc" : "Keep events only when the first signal is true. When the first signal becomes\ntrue, the most recent value of the second signal will be propagated. Until\nthe first signal becomes false again, all events will be propagated. Elm does\nnot allow undefined signals, so a base case must be provided in case the first\nsignal is never true."
        },
        { "name" : "dropWhen",
          "type" : "Signal Bool -> t1 -> Signal t1 -> Signal t1",
          "desc" : "Drop events when the first signal is true. When the first signal becomes false,\nthe most recent value of the second signal will be propagated. Until the first\nsignal becomes true again, all events will be propagated. Elm does not allow\nundefined signals, so a base case must be provided in case the first signal is\nalways true."
        },
        { "name" : "dropRepeats",
          "type" : "Signal t1 -> Signal t1",
          "desc" : "Drop sequential repeated values. For example, if a signal produces the\nsequence `[1,1,2,2,1]`, it becomes `[1,2,1]` by dropping the values that\nare the same as the previous value."
        },
        { "name" : "sampleOn",
          "type" : "Signal t1 -> Signal t2 -> Signal t2",
          "desc" : "Sample from the second input every time an event occurs on the first input.\nFor example, `(sampleOn clicks (every second))` will give the approximate\ntime of the latest click."
        },
        { "name" : "timestamp",
          "type" : "Signal t1 -> Signal (Time,t1)",
          "desc" : "Add a timestamp to any signal. Timestamps increase monotonically. Each timestamp is\nrelated to a specfic event, so `Mouse.x` and `Mouse.y` will always have the same\ntimestamp because they both rely on the same underlying event."
        },
        { "name" : "delay",
          "type" : "Time -> Signal t1 -> Signal t1",
          "desc" : "Delay a signal by a certain amount of time. So `(delay second Mouse.clicks)`\nwill update one second later than any mouse click."
        },
        { "name" : "<~",
          "type" : "(t1 -> t2) -> Signal t1 -> Signal t2",
          "desc" : "An alias for `lift`. A prettier way to apply a\nfunction to the current value of a signal."
        },
        { "name" : "~",
          "type" : "Signal (t1 -> t2) -> Signal t1 -> Signal t2",
          "desc" : "Signal application. This takes two signals, holding a function and\na value. It applies the current function to the current value.\n\nSo the following expressions are equivalent:\n\n    scene <~ Mouse.x ~ Mouse.y\n    lift2 scene Mouse.x Mouse.y"
        }
        ]
      },
      { "name" : "Automaton",
        "values" : [
        { "name" : "run",
          "type" : "Automaton t1 t2 -> t2 -> Signal t1 -> Signal t2",
          "desc" : "Run an automaton on a given signal. The automaton steps forward\nwhenever the input signal updates."
        },
        { "name" : "step",
          "type" : "t1 -> Automaton t1 t3 -> (Automaton t1 t3,t3)",
          "desc" : "Step an automaton forward once with a given input."
        },
        { "name" : ">>>",
          "type" : "Automaton t1 t2 -> Automaton t2 t4 -> Automaton t1 t4",
          "desc" : "Compose two automatons, chaining them together."
        },
        { "name" : "<<<",
          "type" : "Automaton t1 t2 -> Automaton t3 t1 -> Automaton t3 t2",
          "desc" : "Compose two automatons, chaining them together."
        },
        { "name" : "combine",
          "type" : "[Automaton t1 t2] -> Automaton t1 [t2]",
          "desc" : "Combine a list of automatons into a single automaton that produces a list."
        },
        { "name" : "pure",
          "type" : "(t1 -> t2) -> Automaton t1 t2",
          "desc" : "Create an automaton with no memory. It just applies the given function to\nevery input."
        },
        { "name" : "init",
          "type" : "t1 -> (t2 -> t1 -> t1) -> Automaton t2 t1",
          "desc" : "Create an automaton with state. Requires an initial state and a step\nfunction to step the state forward."
        },
        { "name" : "init'",
          "type" : "t1 -> (t2 -> t1 -> (t1,t5)) -> Automaton t2 t5",
          "desc" : "Create an automaton with hidden state. Requires an initial state and a\nstep function to step the state forward and produce an output."
        },
        { "name" : "count",
          "type" : "Automaton t1 Int",
          "desc" : "Count the number of steps taken."
        },
        { "name" : "average",
          "type" : "Int -> Automaton Float Float",
          "desc" : "Computes the running average of the last `n` inputs."
        },
        { "name" : "draggable",
          "type" : "Form -> Automaton (Bool,(Int,Int)) Form",
          "desc" : "Create a draggable form that can be dynamically created and added to a scene."
        }
        ]
      },
      { "name" : "Http",
        "values" : [
        { "name" : "request",
          "type" : "String -> String -> String -> [(String,String)] -> Request String",
          "desc" : "Create a customized request. Arguments are request type (get, post, put,\ndelete, etc.), target url, data, and a list of additional headers."
        },
        { "name" : "get",
          "type" : "String -> Request String",
          "desc" : "Create a GET request to the given url."
        },
        { "name" : "post",
          "type" : "String -> String -> Request String",
          "desc" : "Create a POST request to the given url, carrying the given data."
        },
        { "name" : "send",
          "type" : "Signal (Request t1) -> Signal (Response String)",
          "desc" : "Performs an HTTP request with the given requests. Produces a signal\nthat carries the responses."
        },
        { "name" : "sendGet",
          "type" : "Signal String -> Signal (Response String)",
          "desc" : "Performs an HTTP GET request with the given urls. Produces a signal\nthat carries the responses."
        }
        ]
      },
      { "name" : "Char",
        "values" : [
        { "name" : "isUpper",
          "type" : "Char -> Bool",
          "desc" : "Selects upper case letters."
        },
        { "name" : "isLower",
          "type" : "Char -> Bool",
          "desc" : "Selects lower case letters."
        },
        { "name" : "isDigit",
          "type" : "Char -> Bool",
          "desc" : "Selects ASCII digits (0..9)."
        },
        { "name" : "isOctDigit",
          "type" : "Char -> Bool",
          "desc" : "Selects ASCII octal digits (0..7)."
        },
        { "name" : "isHexDigit",
          "type" : "Char -> Bool",
          "desc" : "Selects ASCII hexadecimal digits (0..9a..fA..F)."
        },
        { "name" : "toUpper",
          "type" : "Char -> Char",
          "desc" : "Convert to upper case."
        },
        { "name" : "toLower",
          "type" : "Char -> Char",
          "desc" : "Convert to lower case."
        },
        { "name" : "toLocaleUpper",
          "type" : "Char -> Char",
          "desc" : "Convert to upper case, according to any locale-specific case mappings."
        },
        { "name" : "toLocaleLower",
          "type" : "Char -> Char",
          "desc" : "Convert to lower case, according to any locale-specific case mappings."
        },
        { "name" : "toCode",
          "type" : "Char -> KeyCode",
          "desc" : "Convert to unicode."
        },
        { "name" : "fromCode",
          "type" : "KeyCode -> Char",
          "desc" : "Convert from unicode."
        }
        ]
      },
      { "name" : "Graphics.Input",
        "values" : [
        { "name" : "buttons",
          "type" : "t1 -> { button : t1 -> String -> Element, events : Signal t1 }",
          "desc" : ""
        },
        { "name" : "button",
          "type" : "String -> (Element,Signal ())",
          "desc" : ""
        },
        { "name" : "customButtons",
          "type" : "t1 -> { button : t1 -> Element -> Element -> Element -> Element, events : Signal t1 }",
          "desc" : ""
        },
        { "name" : "customButton",
          "type" : "Element -> Element -> Element -> (Element,Signal ())",
          "desc" : ""
        },
        { "name" : "checkBoxes",
          "type" : "t1 -> { box : (Bool -> t1) -> Bool -> Element, events : Signal t1 }",
          "desc" : ""
        },
        { "name" : "checkBox",
          "type" : "Bool -> (Signal Element,Signal Bool)",
          "desc" : ""
        },
        { "name" : "textFields",
          "type" : "t1 -> { events : Signal t1, field : (TextState -> t1) -> String -> TextState -> Element }",
          "desc" : ""
        },
        { "name" : "text",
          "type" : "String -> TextState -> (Signal Element,Signal TextState)",
          "desc" : ""
        },
        { "name" : "password",
          "type" : "String -> TextState -> (Signal Element,Signal TextState)",
          "desc" : ""
        },
        { "name" : "email",
          "type" : "String -> TextState -> (Signal Element,Signal TextState)",
          "desc" : ""
        }
        ]
      },
      { "name" : "Graphics.Geometry",
        "values" : [

          ]
      },
      { "name" : "Graphics.Collage",
        "values" : [
        { "name" : "filled",
          "type" : "Color -> Shape -> Form",
          "desc" : ""
        },
        { "name" : "textured",
          "type" : "String -> Shape -> Form",
          "desc" : ""
        },
        { "name" : "gradient",
          "type" : "Gradient -> Shape -> Form",
          "desc" : ""
        },
        { "name" : "outlined",
          "type" : "LineStyle -> Shape -> Form",
          "desc" : ""
        },
        { "name" : "traced",
          "type" : "LineStyle -> Path -> Form",
          "desc" : ""
        },
        { "name" : "sprite",
          "type" : "Int -> Int -> (Int,Int) -> String -> Form",
          "desc" : ""
        },
        { "name" : "toForm",
          "type" : "Element -> Form",
          "desc" : ""
        },
        { "name" : "group",
          "type" : "[Form] -> Form",
          "desc" : ""
        },
        { "name" : "groupTransform",
          "type" : "Matrix -> [Form] -> Form",
          "desc" : ""
        },
        { "name" : "rotate",
          "type" : "Float -> Form -> Form",
          "desc" : ""
        },
        { "name" : "collage",
          "type" : "Int -> Int -> [Form] -> Element",
          "desc" : ""
        }
        ]
      },
      { "name" : "Graphics.Color",
        "values" : [
        { "name" : "rgba",
          "type" : "Int -> Int -> Int -> Float -> Color",
          "desc" : "Create RGB colors with an alpha component for transparency.\nThe alpha component is specified with numbers between 0 and 1."
        },
        { "name" : "rgb",
          "type" : "Int -> Int -> Int -> Color",
          "desc" : "Create RGB colors from numbers between 0 and 255 inclusive."
        },
        { "name" : "red",
          "type" : "Color",
          "desc" : ""
        },
        { "name" : "lime",
          "type" : "Color",
          "desc" : ""
        },
        { "name" : "blue",
          "type" : "Color",
          "desc" : ""
        },
        { "name" : "yellow",
          "type" : "Color",
          "desc" : ""
        },
        { "name" : "cyan",
          "type" : "Color",
          "desc" : ""
        },
        { "name" : "magenta",
          "type" : "Color",
          "desc" : ""
        },
        { "name" : "black",
          "type" : "Color",
          "desc" : ""
        },
        { "name" : "white",
          "type" : "Color",
          "desc" : ""
        },
        { "name" : "gray",
          "type" : "Color",
          "desc" : ""
        },
        { "name" : "grey",
          "type" : "Color",
          "desc" : ""
        },
        { "name" : "maroon",
          "type" : "Color",
          "desc" : ""
        },
        { "name" : "navy",
          "type" : "Color",
          "desc" : ""
        },
        { "name" : "green",
          "type" : "Color",
          "desc" : ""
        },
        { "name" : "teal",
          "type" : "Color",
          "desc" : ""
        },
        { "name" : "purple",
          "type" : "Color",
          "desc" : ""
        },
        { "name" : "violet",
          "type" : "Color",
          "desc" : ""
        },
        { "name" : "forestGreen",
          "type" : "Color",
          "desc" : ""
        },
        { "name" : "complement",
          "type" : "Color -> Color",
          "desc" : "Produce a &ldquo;complementary color&rdquo;.\nThe two colors will accent each other."
        },
        { "name" : "hsva",
          "type" : "Int -> Float -> Float -> Float -> Color",
          "desc" : "Create HSV colors with an alpha component for transparency.\nThe alpha component is specified with numbers between 0 and 1."
        },
        { "name" : "hsv",
          "type" : "Int -> Float -> Float -> Color",
          "desc" : "Create HSV colors. HSV stands for hue-saturation-value.\n\nHue is a degree from 0 to 360 representing a color wheel: red at 0&deg;,\ngreen at 120&deg;, blue at 240&deg;, and red again at 360&deg;.\nThis makes it easy to cycle through colors and compute color complements,\ntriads, tetrads, etc.\n\nSaturation is a number between 1 and 0 where lowering this number makes\nyour color more grey. This can help you tone a color down.\n\nValue is also a number between 1 and 0. Lowering this number makes your\ncolor more black.\n\nLook up the &ldquo;HSV cylinder&rdquo; for more information."
        },
        { "name" : "linear",
          "type" : "(Number t1,Number t1) -> (Number t1,Number t1) -> [(Float,Color)] -> Gradient",
          "desc" : ""
        },
        { "name" : "radial",
          "type" : "(Number t1,Number t1) -> Number t1 -> (Number t1,Number t1) -> Number t1 -> [(Float,Color)] -> Gradient",
          "desc" : ""
        }
        ]
      },
      { "name" : "Graphics.Text",
        "values" : [
        { "name" : "toText",
          "type" : "String -> Text",
          "desc" : "Convert a string into text which can be styled and displayed."
        },
        { "name" : "typeface",
          "type" : "String -> Text -> Text",
          "desc" : "Set the typeface of some text. The first argument should be a comma separated listing of the desired typefaces\n    \"helvetica, arial, sans-serif\"\nWorks the same as the CSS font-family property."
        },
        { "name" : "monospace",
          "type" : "Text -> Text",
          "desc" : "Switch to a monospace typeface. Good for code snippets."
        },
        { "name" : "header",
          "type" : "Text -> Text",
          "desc" : "Make text big and noticable."
        },
        { "name" : "href",
          "type" : "String -> Text -> Text",
          "desc" : "Create a link."
        },
        { "name" : "height",
          "type" : "Float -> Text -> Text",
          "desc" : "Set the height of text in \\\"ems\\\". 1em is the normal height of text. 2ems is twice that height."
        },
        { "name" : "color",
          "type" : "Color -> Text -> Text",
          "desc" : "Set the color of a string."
        },
        { "name" : "bold",
          "type" : "Text -> Text",
          "desc" : "Make a string bold."
        },
        { "name" : "italic",
          "type" : "Text -> Text",
          "desc" : "Italicize a string."
        },
        { "name" : "overline",
          "type" : "Text -> Text",
          "desc" : "Draw a line above a string."
        },
        { "name" : "underline",
          "type" : "Text -> Text",
          "desc" : "Underline a string."
        },
        { "name" : "strikeThrough",
          "type" : "Text -> Text",
          "desc" : "Draw a line through a string."
        },
        { "name" : "justified",
          "type" : "Text -> Element",
          "desc" : "Display justified, styled text."
        },
        { "name" : "centered",
          "type" : "Text -> Element",
          "desc" : "Display centered, styled text."
        },
        { "name" : "righted",
          "type" : "Text -> Element",
          "desc" : "Display right justified, styled text."
        },
        { "name" : "text",
          "type" : "Text -> Element",
          "desc" : "Display styled text."
        },
        { "name" : "plainText",
          "type" : "String -> Element",
          "desc" : "Display a plain string."
        },
        { "name" : "asText",
          "type" : "t1 -> Element",
          "desc" : "Convert anything to it's textual representation and make it displayable in browser\n    asText = text . monospace . show\nExcellent for debugging"
        }
        ]
      },
      { "name" : "Graphics.Matrix",
        "values" : [
        { "name" : "identity",
          "type" : "Matrix",
          "desc" : ""
        },
        { "name" : "transform",
          "type" : "Float -> Float -> Float -> Float -> Float -> Float -> Matrix -> Matrix",
          "desc" : ""
        },
        { "name" : "rotate",
          "type" : "Float -> Matrix -> Matrix",
          "desc" : ""
        },
        { "name" : "move",
          "type" : "Float -> Float -> Matrix -> Matrix",
          "desc" : ""
        },
        { "name" : "scale",
          "type" : "Float -> Matrix -> Matrix",
          "desc" : ""
        },
        { "name" : "scaleX",
          "type" : "Float -> Matrix -> Matrix",
          "desc" : ""
        },
        { "name" : "scaleY",
          "type" : "Float -> Matrix -> Matrix",
          "desc" : ""
        },
        { "name" : "reflectX",
          "type" : "Matrix -> Matrix",
          "desc" : ""
        },
        { "name" : "reflectY",
          "type" : "Matrix -> Matrix",
          "desc" : ""
        },
        { "name" : "multiply",
          "type" : "Matrix -> Matrix -> Matrix",
          "desc" : ""
        },
        { "name" : "matrix",
          "type" : "Float -> Float -> Float -> Float -> Float -> Float -> Matrix",
          "desc" : ""
        }
        ]
      },
      { "name" : "Graphics.Element",
        "values" : [
        { "name" : "widthOf",
          "type" : "Element -> Int",
          "desc" : ""
        },
        { "name" : "heightOf",
          "type" : "Element -> Int",
          "desc" : ""
        },
        { "name" : "sizeOf",
          "type" : "Element -> Int",
          "desc" : ""
        },
        { "name" : "width",
          "type" : "Int -> Element -> Element",
          "desc" : ""
        },
        { "name" : "height",
          "type" : "Int -> Element -> Element",
          "desc" : ""
        },
        { "name" : "opacity",
          "type" : "Float -> Element -> Element",
          "desc" : ""
        },
        { "name" : "color",
          "type" : "Color -> Element -> Element",
          "desc" : ""
        },
        { "name" : "tag",
          "type" : "String -> Element -> Element",
          "desc" : ""
        },
        { "name" : "link",
          "type" : "String -> Element -> Element",
          "desc" : ""
        },
        { "name" : "image",
          "type" : "Int -> Int -> String -> Element",
          "desc" : ""
        },
        { "name" : "fittedImage",
          "type" : "Int -> Int -> String -> Element",
          "desc" : ""
        },
        { "name" : "croppedImage",
          "type" : "Int -> Int -> (Int,Int) -> String -> Element",
          "desc" : ""
        },
        { "name" : "container",
          "type" : "Int -> Int -> Position -> Element -> Element",
          "desc" : ""
        },
        { "name" : "spacer",
          "type" : "Int -> Int -> Element",
          "desc" : ""
        },
        { "name" : "flow",
          "type" : "Direction -> [Element] -> Element",
          "desc" : ""
        },
        { "name" : "above",
          "type" : "Element -> Element -> Element",
          "desc" : ""
        },
        { "name" : "below",
          "type" : "Element -> Element -> Element",
          "desc" : ""
        },
        { "name" : "beside",
          "type" : "Element -> Element -> Element",
          "desc" : ""
        },
        { "name" : "layers",
          "type" : "[Element] -> Element",
          "desc" : ""
        },
        { "name" : "absolute",
          "type" : "Int -> Pos",
          "desc" : ""
        },
        { "name" : "relative",
          "type" : "Float -> Pos",
          "desc" : ""
        },
        { "name" : "middle",
          "type" : "Position",
          "desc" : ""
        },
        { "name" : "topLeft",
          "type" : "Position",
          "desc" : ""
        },
        { "name" : "topRight",
          "type" : "Position",
          "desc" : ""
        },
        { "name" : "bottomLeft",
          "type" : "Position",
          "desc" : ""
        },
        { "name" : "bottomRight",
          "type" : "Position",
          "desc" : ""
        },
        { "name" : "midLeft",
          "type" : "Position",
          "desc" : ""
        },
        { "name" : "midRight",
          "type" : "Position",
          "desc" : ""
        },
        { "name" : "midTop",
          "type" : "Position",
          "desc" : ""
        },
        { "name" : "midBottom",
          "type" : "Position",
          "desc" : ""
        },
        { "name" : "middleAt",
          "type" : "Pos -> Pos -> Position",
          "desc" : ""
        },
        { "name" : "topLeftAt",
          "type" : "Pos -> Pos -> Position",
          "desc" : ""
        },
        { "name" : "topRightAt",
          "type" : "Pos -> Pos -> Position",
          "desc" : ""
        },
        { "name" : "bottomLeftAt",
          "type" : "Pos -> Pos -> Position",
          "desc" : ""
        },
        { "name" : "bottomRightAt",
          "type" : "Pos -> Pos -> Position",
          "desc" : ""
        },
        { "name" : "midLeftAt",
          "type" : "Pos -> Pos -> Position",
          "desc" : ""
        },
        { "name" : "midRightAt",
          "type" : "Pos -> Pos -> Position",
          "desc" : ""
        },
        { "name" : "midTopAt",
          "type" : "Pos -> Pos -> Position",
          "desc" : ""
        },
        { "name" : "midBottomAt",
          "type" : "Pos -> Pos -> Position",
          "desc" : ""
        },
        { "name" : "up",
          "type" : "Direction",
          "desc" : ""
        },
        { "name" : "down",
          "type" : "Direction",
          "desc" : ""
        },
        { "name" : "left",
          "type" : "Direction",
          "desc" : ""
        },
        { "name" : "right",
          "type" : "Direction",
          "desc" : ""
        },
        { "name" : "inward",
          "type" : "Direction",
          "desc" : ""
        },
        { "name" : "outward",
          "type" : "Direction",
          "desc" : ""
        }
        ]
      },
      { "name" : "Json.Experimental",
        "values" : [

          ]
      }
    ]
  }

  function modToDocs (mods)  {
    var ds = mods.modules.map(function (m) {
      var fs = m.values.map(function (f) {
        return {name: f.name, type: f.type, module: m.name, desc: f.desc};
      });
      return fs;
    });
    return ds.reduce(function (acc, val) { return acc.concat(val); }, []);
  }

  var docs = [];
  var docs = modToDocs(modules);

  return {
    modules: modules,
    docs: docs,
    moduleToPageMap: moduleToPageMap
  };

}());
