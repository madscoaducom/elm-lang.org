var docs = {
  'import': {
    type: 'import',
    module: '',
    ref: '/learn/Syntax.elm#modules',
    desc: '<p>Import another Elm module</p>'
      + '<pre><code>module MyModule where\n\nimport List\nimport List (intercalate, intersperse)\nimport List hiding (map,foldl,foldr)\nimport List as L</code></pre>'
  },
  'module': {
    type: 'module',
    module: '',
    ref: '/learn/Syntax.elm#modules',
    desc: '<p>Define a module in Elm</p>'
      + '<pre><code>module MyModule where\n\nimport List\nimport List (intercalate, intersperse)\nimport List hiding (map,foldl,foldr)\nimport List as L</code></pre>'
  },
  'where': {
    type: 'where',
    module: '',
    ref: '/learn/Syntax.elm#modules',
    desc: '<p>Part of the module definition</p>'
      + '<pre><code>module MyModule where\n\nimport List\nimport List (intercalate, intersperse)\nimport List hiding (map,foldl,foldr)\nimport List as L</code></pre>'
  },
  'main': {
    type: 'main',
    module: '',
    ref: '',
    desc: 'The \'main\' function is what gets put on the screen'
  },
  'let': {
    type: 'let',
    module: '',
    ref: '/learn/Syntax.elm#let-expressions',
    desc: '<p>This lets you reuse code, avoid repeating computations, and improve code readability.</p>'
      + '<pre><code>let c = hypotenuse 3 4 in\n'
      + '    c*c</code></pre>'
  },
  'in': {
    type: 'in',
    module: '',
    ref: '/learn/Syntax.elm#let-expressions',
    desc: '<p>Part of the let construct</p>'
      + '<pre><code>let c = hypotenuse 3 4 in\n'
      + '    c*c</code></pre>'
  },
  '\\': {
    type: '\\',
    module: '',
    ref: '/learn/Syntax.elm#applying-functions',
    desc: '<p>Lambda function</p>'
      + '<pre><code>\\x -> x * x</code></pre>'
  },
  '->': {
    type: '->',
    module: '',
    ref: '/learn/Syntax.elm#conditionals',
    desc: '<p>Used in multiway if, and case statements to indicate outcome of match (also part of Lambda function definition)</p>'
  },
  'markdown': {
    type: 'markdown',
    module: '',
    ref: '/blog/announce/version-0.4.0.elm#markdown-support',
    desc: '<p>Elm has support for embedded Markdown. The syntax is</p>'
      + '<pre><code>[markdown| ... |] :: Element</code></pre>'
  },
  '+': {
    type: '(+) :: Number -> Number -> Number',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Functions for basic mathematics.'
  },
  '-': {
    type: '(-) :: Number -> Number -> Number',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Functions for basic mathematics.'
  },
  '*': {
    type: '(*) :: Number -> Number -> Number',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Functions for basic mathematics.'
  },
  '^': {
    type: '(^) :: Number -> Number -> Number',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Functions for basic mathematics.'
  },
  '/': {
    type: '(/) :: Float -> Float -> Float',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Division.'
  },
  'div': {
    type: 'div :: Int -> Int -> Int',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Integer division, remainder is discarded.'
  },
  'rem': {
    type: 'rem :: Int -> Int -> Int',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Finds the remainder after dividing one number by another. (4 `rem` 3) == 1.'
  },
  'mod': {
    type: 'mod :: Int -> Int -> Int',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Perform modular arithmetic. (-2 `mod` 5) == 3'
  },
  'sin': {
    type: 'sin, cos, tan, asin, acos, atan :: Number -> Number',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Basic functions of trigonometry.'
  },
  'cos': {
    type: 'sin, cos, tan, asin, acos, atan :: Number -> Number',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Basic functions of trigonometry.'
  },
  'tan': {
    type: 'sin, cos, tan, asin, acos, atan :: Number -> Number',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Basic functions of trigonometry.'
  },
  'asin': {
    type: 'sin, cos, tan, asin, acos, atan :: Number -> Number',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Basic functions of trigonometry.'
  },
  'acos': {
    type: 'sin, cos, tan, asin, acos, atan :: Number -> Number',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Basic functions of trigonometry.'
  },
  'atan': {
    type: 'sin, cos, tan, asin, acos, atan :: Number -> Number',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Basic functions of trigonometry.'
  },
  'atan2': {
    type: 'atan2 :: Number -> Number -> Number',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Returns the arctangent of the quotient of its arguments in radians. So (atan2 y x) computes the angle from the positive x-axis to the vector starting at the origin and ending at (x,y).'
  },
  'sqrt': {
    type: 'sqrt :: Number -> Number',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Take the square root of a number.'
  },
  'abs': {
    type: 'abs :: Number -> Number',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Take the absolute value of a number.'
  },
  'logBase': {
    type: 'logBase :: Number -> Number -> Number',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Calculate the logarithm of a number with a given base: logBase 10 100 == 2.'
  },
  'min': {
    type: 'min, max :: Number -> Number -> Number',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Given two numbers, returns the smaller (or greater respectively).'
  },
  'max': {
    type: 'min, max :: Number -> Number -> Number',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Given two numbers, returns the smaller (or greater respectively).'
  },
  'clamp': {
    type: 'clamp :: Number -> Number -> Number -> Number',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Clamps a number within a given range, so (clamp 100 200 x) is 200 for x >= 200, 100 for x <= 100, and x for any 100 < x < 200 '
  },
  'pi': {
    type: 'pi :: Float',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'An approximation of pi.'
  },
  'e': {
    type: 'e :: Float',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'An approximation of e.'
  },
  'round': {
    type: 'round :: Float -> Int',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Round a number to the nearest integer.'
  },
  'truncate': {
    type: 'truncate :: Float -> Int',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Truncate a decimal number, rounding towards zero.'
  },
  'floor': {
    type: 'floor :: Float -> Int',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Floor function, rounding down.'
  },
  'ceiling': {
    type: 'ceiling :: Float -> Int',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Ceiling function, rounding up.'
  },
  'toFloat': {
    type: 'toFloat :: Int -> Float',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Convert an integer into a float.'
  },
  'show': {
    type: 'show :: a -> String',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Convert almost any value to its string representation.'
  },
  'readInt': {
    type: 'readInt :: String -> Maybe Int',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Read an integer from a string'
  },
  'readFloat': {
    type: 'readFloat :: String -> Maybe Float',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Read a float from a string.'
  },
  '.': {
    type: '(.) :: (b -> c) -> (a -> b) -> (a -> c)',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Function composition: f . g == (\\x -> f (g x))'
  },
  '$': {
    type: '($) :: (a -> b) -> a -> b',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: '<p>Function application (f $ x == f x). This function is useful for avoiding parenthesis. Consider the following code to create a text element:</p>'
      + '<pre><code>text (monospace (toText \"code\"))</code></pre> <p>This can also be written as</p> <pre><code>text . monospace $ toText \"code\"</code></pre>'
  },
  'id': {
    type: 'id :: a -> a',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Given a value, returns exactly the same value.'
  },
  'fst': {
    type: 'fst :: (a,b) -> a',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Given a 2-tuple, returns the first value.'
  },
  'snd': {
    type: 'snd :: (a,b) -> b',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Given a 2-tuple, returns the second value.'
  },
  'flip': {
    type: 'flip :: (a -> b -> c) -> (b -> a -> c)',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Flips the order of the first two arguments to a function.'
  },
  'curry': {
    type: 'curry :: ((a,b) -> c) -> a -> b -> c',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Change how arguments are passed to a function. This splits paired arguments into two separate arguments.'
  },
  'uncurry': {
    type: 'uncurry :: (a -> b -> c) -> (a,b) -> c',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Change how arguments are passed to a function. This combines two arguments into a sigle pair.'
  },
  'otherwise': {
    type: 'otherwise :: Bool',
    module: 'Prelude',
    ref: '/docs/Prelude.elm',
    desc: 'Equal to true. Useful as the last case of a guarded definition.'
  },
  'isUpper': {
    type: 'isUpper :: Char -> Bool',
    module: 'Char',
    ref: '/docs/Data/Char.elm',
    desc: 'Selects upper case letters.'
  },
  'isLower': {
    type: 'isLower :: Char -> Bool',
    module: 'Char',
    ref: '/docs/Data/Char.elm',
    desc: 'Selects lower case letters.'
  },
  'isDigit': {
    type: 'isDigit :: Char -> Bool',
    module: 'Char',
    ref: '/docs/Data/Char.elm',
    desc: 'Selects ASCII digits (0..9).'
  },
  'isOctDigit': {
    type: 'isOctDigit :: Char -> Bool',
    module: 'Char',
    ref: '/docs/Data/Char.elm',
    desc: 'Selects ASCII octal digits (0..7).'
  },
  'isHexDigit': {
    type: 'isHexDigit :: Char -> Bool',
    module: 'Char',
    ref: '/docs/Data/Char.elm',
    desc: 'Selects ASCII hexadecimal digits (0..9a..fA..F).'
  },
  'toUpper': {
    type: 'toUpper :: Char -> Char',
    module: 'Char',
    ref: '/docs/Data/Char.elm',
    desc: 'Convert to upper case.'
  },
  'toLower': {
    type: 'toLower :: Char -> Char',
    module: 'Char',
    ref: '/docs/Data/Char.elm',
    desc: 'Convert to lower case.'
  },
  'toLocaleUpper': {
    type: 'toLocaleUpper :: Char -> Char',
    module: 'Char',
    ref: '/docs/Data/Char.elm',
    desc: 'Convert to upper case, according to any locale-specific case mappings.'
  },
  'toLocaleLower': {
    type: 'toLocaleLower :: Char -> Char',
    module: 'Char',
    ref: '/docs/Data/Char.elm',
    desc: 'Convert to lower case, according to any locale-specific case mappings.'
  },
  'toCode': {
    type: 'toCode :: Char -> Int',
    module: 'Char',
    ref: '/docs/Data/Char.elm',
    desc: 'Convert to unicode.'
  },
  'fromCode': {
    type: 'fromCode :: Int -> Char',
    module: 'Char',
    ref: '/docs/Data/Char.elm',
    desc: 'Convert from unicode.'
  },
  'empty': {
    type: 'empty :: Dict k v',
    module: 'Dict',
    ref: '/docs/Data/Dict.elm',
    desc: 'Create an empty dictionary.'
  },
  'singleton': {
    type: 'singleton :: k -> v -> Dict k v',
    module: 'Dict',
    ref: '/docs/Data/Dict.elm',
    desc: 'Create a dictionary with one key-value pair.'
  },
  'insert': {
    type: 'insert :: k -> v -> Dict k v -> Dict k v',
    module: 'Dict',
    ref: '/docs/Data/Dict.elm',
    desc: 'Insert a key-value pair into a dictionary. Replaces value when there is a collision.'
  },
  'remove': {
    type: 'remove :: k -> Dict k v -> Dict k v',
    module: 'Dict',
    ref: '/docs/Data/Dict.elm',
    desc: 'Remove a key-value pair from a dictionary. If the key is not found, no changes are made.'
  },
  'member': {
    type: 'member :: k -> Dict k v -> Bool',
    module: 'Dict',
    ref: '/docs/Data/Dict.elm',
    desc: 'Determine if a key is in a dictionary.'
  },
  'lookup': {
    type: 'lookup :: k -> Dict k v -> Maybe v',
    module: 'Dict',
    ref: '/docs/Data/Dict.elm',
    desc: 'Lookup the value associated with a key.'
  },
  'findWithDefault': {
    type: 'findWithDefault :: v -> k -> Dict k v -> v',
    module: 'Dict',
    ref: '/docs/Data/Dict.elm',
    desc: 'Find the value associated with a key. If the key is not found, return the default value.'
  },
  'find': {
    type: 'find :: k -> Dict k v -> v',
    module: 'Dict',
    ref: '/docs/Data/Dict.elm',
    desc: 'Find the value associated with a key. If the key is not found, there will be a runtime error.'
  },
  'union': {
    type: 'union :: Dict k v -> Dict k v -> Dict k v',
    module: 'Dict',
    ref: '/docs/Data/Dict.elm',
    desc: 'Combine two dictionaries. If there is a collision, preference is given to the first dictionary.'
  },
  'intersect': {
    type: 'intersect :: Dict k v -> Dict k w -> Dict k v',
    module: 'Dict',
    ref: '/docs/Data/Dict.elm',
    desc: 'Keep a key-value pair when its key appears in the second dictionary. Preference is given to values in the first dictionary.'
  },
  'diff': {
    type: 'diff :: Dict k v -> Dict k w -> Dict k v',
    module: 'Dict',
    ref: '/docs/Data/Dict.elm',
    desc: 'Keep a key-value pair when its key does not appear in the second dictionary. Preference is given to the first dictionary.'
  },
  'map': {
    type: 'map :: (a -> b) -> Dict k a -> Dict k b',
    module: 'Dict',
    ref: '/docs/Data/Dict.elm',
    desc: 'Apply a function to all values in a dictionary.'
  },
  'foldl': {
    type: 'foldl :: (k -> v -> b -> b) -> b -> Dict k v -> b',
    module: 'Dict',
    ref: '/docs/Data/Dict.elm',
    desc: 'Fold over the key-value pairs in a dictionary, in order from lowest key to highest key.'
  },
  'foldr': {
    type: 'foldr :: (k -> v -> b -> b) -> b -> Dict k v -> b',
    module: 'Dict',
    ref: '/docs/Data/Dict.elm',
    desc: 'Fold over the key-value pairs in a dictionary, in order from highest key to lowest key.'
  },
  'keys': {
    type: 'keys :: Dict k v -> [k]',
    module: 'Dict',
    ref: '/docs/Data/Dict.elm',
    desc: 'Get all of the keys in a dictionary.'
  },
  'values': {
    type: 'values :: Dict k v -> [v]',
    module: 'Dict',
    ref: '/docs/Data/Dict.elm',
    desc: 'Get all of the values in a dictionary.'
  },
  'toList': {
    type: 'toList :: Dict k v -> [(k,v)]',
    module: 'Dict',
    ref: '/docs/Data/Dict.elm',
    desc: 'Convert a dictionary into an association list of key-value pairs.'
  },
  'fromList': {
    type: 'fromList :: [(k,v)] -> Dict k v',
    module: 'Dict',
    ref: '/docs/Data/Dict.elm',
    desc: 'Convert an association list into a dictionary.'
  },
  ':': {
    type: '(:) :: a -> [a] -> [a]',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Add an element to the front of a list (a : [b,c] = [a,b,c]).'
  },
  '++': {
    type: '(++) :: [a] -> [a] -> [a]',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Appends two lists.'
  },
  'head': {
    type: 'head :: [a] -> a',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Extract the first element of a list. List must be non-empty.'
  },
  'tail': {
    type: 'tail :: [a] -> [a]',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Extract the elements after the head of the list. List must be non-empty.'
  },
  'last': {
    type: 'last :: [a] -> a',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Extract the last element of a list. List must be non-empty.'
  },
  'length': {
    type: 'length :: [a] -> Int',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Determine the length of a list.'
  },
  'map': {
    type: 'map :: (a -> b) -> [a] -> [b]',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Apply a function to every element of a list.'
  },
  'reverse': {
    type: 'reverse :: [a] -> [a]',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Reverse a list.'
  },
  'intersperse': {
    type: 'intersperse :: a -> [a] -> [a]',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Places the given value between all members of the given list.'
  },
  'intercalate': {
    type: 'intercalate :: [a] -> [[a]] -> [a]',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Places the given value between all of the lists in the second argument and concatenates the result. Note: intercalate xs xss = concat (intersperse xs xss)'
  },
  'foldr': {
    type: 'foldr :: (a -> b -> b) -> b -> [a] -> b',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Reduce a list from the right.'
  },
  'foldl': {
    type: 'foldl :: (a -> b -> b) -> b -> [a] -> b',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Reduce a list from the left.'
  },
  'foldr1': {
    type: 'foldr1 :: (a -> a -> a) -> [a] -> a',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Reduce a list from the right without a base case. List must be non-empty.'
  },
  'foldl1': {
    type: 'foldl1 :: (a -> a -> a) -> [a] -> a',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Reduce a list from the left without a base case. List must be non-empty.'
  },
  'scanl': {
    type: 'scanl :: (a -> b -> b) -> b -> [a] -> [b]',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Reduce a list from the left, building up all of the intermediate results into a list.'
  },
  'scanl1': {
    type: 'scanl1 :: (a -> a -> a) -> [a] -> [a]',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Same as scanl but it doesn\'t require a base case. List must be non-empty.'
  },
  'concat': {
    type: 'concat :: [[a]] -> [a]',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Flatten a list of lists.'
  },
  'concatMap': {
    type: 'concatMap :: (a -> [b]) -> [a] -> [b]',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Map a given function onto a list and flatten the resulting lists. (concatMap f xs == concat (map f xs))'
  },
  'and': {
    type: 'and :: [Bool] -> Bool',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Check to see if all elements are True.'
  },
  'or': {
    type: 'or :: [Bool] -> Bool',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Check to see if any elements are True.'
  },
  'all': {
    type: 'all :: (a -> Bool) -> [a] -> Bool',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Check to see if all elements satisfy the predicate.'
  },
  'any': {
    type: 'any :: (a -> Bool) -> [a] -> Bool',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Check to see if any elements satisfy the predicate.'
  },
  'sum': {
    type: 'sum :: [Int] -> Int',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Get the sum of the list elements.'
  },
  'product': {
    type: 'product :: [Int] -> Int',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Get the product of the list elements.'
  },
  'maximum': {
    type: 'maximum :: [Int] -> Int',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Find the highest number in a non-empty list.'
  },
  'minimum': {
    type: 'minimum :: [Int] -> Int',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Find the lowest number in a non-empty list.'
  },
  'filter': {
    type: 'filter :: (a -> Bool) -> [a] -> [a]',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Filter out elements which do not satisfy the predicate.'
  },
  'sort': {
    type: 'sort :: [Number] -> [Number]',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Sorts a list of numbers.'
  },
  'partition': {
    type: 'partition :: (a -> Bool) -> [a] -> ([a],[a])',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Split a list based on the predicate.'
  },
  'zip': {
    type: 'zip :: [a] -> [b] -> [(a,b)]',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Combine two lists, combining them into tuples pairwise. If one input list has extra elements (it is longer), those elements are dropped.'
  },
  'zipWith': {
    type: 'zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Combine two lists, combining them with the given function. If one input list has extra elements (it is longer), those elements are dropped.'
  },
  'take': {
    type: 'take :: Int -> [a] -> [a]',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: 'Take the first n members of a list. Thus, (take 2 [1,2,3,4]) ==> [1,2]'
  },
  'drop': {
    type: 'drop :: Int -> [a] -> [a]',
    module: 'List',
    ref: '/docs/Data/List.elm',
    desc: '<p>Drop the first n members of a list. Thus</p><pre><code>(drop 2 [1,2,3,4]) ==> [3,4]</code></pre>'
  },
  'Maybe': {
    type: 'data Maybe a = Just a | Nothing',
    module: 'Maybe',
    ref: '/docs/Data/Maybe.elm',
    desc: 'The Maybe datatype. Useful when a computation may or may not result in a value (e.g. logarithm is defined only for positive numbers).'
  },
  'Just': {
    type: 'data Maybe a = Just a | Nothing',
    module: 'Maybe',
    ref: '/docs/Data/Maybe.elm',
    desc: 'The Maybe datatype. Useful when a computation may or may not result in a value (e.g. logarithm is defined only for positive numbers).'
  },
  'Nothing': {
    type: 'data Maybe a = Just a | Nothing',
    module: 'Maybe',
    ref: '/docs/Data/Maybe.elm',
    desc: 'The Maybe datatype. Useful when a computation may or may not result in a value (e.g. logarithm is defined only for positive numbers).'
  },
  'maybe': {
    type: 'maybe :: b -> (a -> b) -> Maybe a -> b',
    module: 'Maybe',
    ref: '/docs/Data/Maybe.elm',
    desc: 'Apply a function to the contents of a Maybe. Return default when given Nothing.'
  },
  'isJust': {
    type: 'isJust :: Maybe a -> Bool',
    module: 'Maybe',
    ref: '/docs/Data/Maybe.elm',
    desc: 'Check if constructed with Just.'
  },
  'isNothing': {
    type: 'isNothing :: Maybe a -> Bool',
    module: 'Maybe',
    ref: '/docs/Data/Maybe.elm',
    desc: 'Check if constructed with Nothing.'
  },
  'fromMaybe': {
    type: 'fromMaybe :: a -> Maybe a -> a',
    module: 'Maybe',
    ref: '/docs/Data/Maybe.elm',
    desc: 'Extract the value of from a Maybe. Returns default when given Nothing.'
  },
  'consMaybe': {
    type: 'consMaybe :: Maybe a -> [a] -> [a]',
    module: 'Maybe',
    ref: '/docs/Data/Maybe.elm',
    desc: 'If Just, adds the value to the front of the list. If Nothing, list is unchanged.'
  },
  'catMaybes': {
    type: 'catMaybes :: [Maybe a] -> [a]',
    module: 'Maybe',
    ref: '/docs/Data/Maybe.elm',
    desc: 'Filters out Nothings and extracts the remaining values.'
  },
  'mapMaybe': {
    type: 'mapMaybe :: (a -> Maybe b) -> [a] -> [b]',
    module: 'Maybe',
    ref: '/docs/Data/Maybe.elm',
    desc: 'Maps function onto a list, discarding all Nothing results from the resulting list.'
  },
  'empty': {
    type: 'empty :: Set a',
    module: 'Set',
    ref: '/docs/Data/Set.elm',
    desc: 'Create an empty set.'
  },
  'singleton': {
    type: 'singleton :: a -> Set a',
    module: 'Set',
    ref: '/docs/Data/Set.elm',
    desc: 'Create a set with one value.'
  },
  'insert': {
    type: 'insert :: a -> Set a -> Set a',
    module: 'Set',
    ref: '/docs/Data/Set.elm',
    desc: 'Insert a value into a set.'
  },
  'remove': {
    type: 'remove :: a -> Set a -> Set a',
    module: 'Set',
    ref: '/docs/Data/Set.elm',
    desc: 'Remove a value from a set. If the value is not found, no changes are made.'
  },
  'member': {
    type: 'member :: a -> Set a -> Bool',
    module: 'Set',
    ref: '/docs/Data/Set.elm',
    desc: 'Determine if a value is in a set.'
  },
  'union': {
    type: 'union :: Set a -> Set a -> Set a',
    module: 'Set',
    ref: '/docs/Data/Set.elm',
    desc: 'Get the union of two sets. Keep all values.'
  },
  'intersect': {
    type: 'intersect :: Set a -> Set a -> Set a',
    module: 'Set',
    ref: '/docs/Data/Set.elm',
    desc: 'Get the intersection of two sets. Keeps values that appear in both sets.'
  },
  'diff': {
    type: 'diff :: Set a -> Set a -> Set a',
    module: 'Set',
    ref: '/docs/Data/Set.elm',
    desc: 'Get the difference between the first set and the second. Keeps values that do not appear in the second set.'
  },
  'map': {
    type: 'map :: (a -> b) -> Set a -> Set b',
    module: 'Set',
    ref: '/docs/Data/Set.elm',
    desc: 'Map a function onto a set, creating a new set with no duplicates.'
  },
  'foldl': {
    type: 'foldl :: (a -> b -> b) -> b -> Set a -> b',
    module: 'Set',
    ref: '/docs/Data/Set.elm',
    desc: 'Fold over the values in a set, in order from lowest to highest.'
  },
  'foldr': {
    type: 'foldr :: (a -> b -> b) -> b -> Set a -> b',
    module: 'Set',
    ref: '/docs/Data/Set.elm',
    desc: 'Fold over the values in a set, in order from highest to lowest.'
  },
  'toList': {
    type: 'toList :: Set a -> [a]',
    module: 'Set',
    ref: '/docs/Data/Set.elm',
    desc: 'Convert a set into a list.'
  },
  'fromList': {
    type: 'fromList :: [a] -> Set a',
    module: 'Set',
    ref: '/docs/Data/Set.elm',
    desc: 'Convert a list into a set, removing any duplicates.'
  },
  'rgb': {
    type: 'rgb :: Int -> Int -> Int -> Color',
    module: 'Color',
    ref: '/docs/Graphics/Color.elm',
    desc: 'Create rgb colors from numbers between 0 and 255 inclusive.'
  },
  'rgba': {
    type: 'rgba :: Int -> Int -> Int -> Float -> Color',
    module: 'Color',
    ref: '/docs/Graphics/Color.elm',
    desc: 'Create RGB colors with an alpha component for transparency. The alpha component is specified with numbers between 0 and 1.'
  },
  'complement': {
    type: 'complement :: Color -> Color',
    module: 'Color',
    ref: '/docs/Graphics/Color.elm',
    desc: 'Produces a &ldquo;complementary color&rdquo;. The two colors will accent each other.'
  },
  'hsv': {
    type: 'hsv :: Int -> Float -> Float -> Color',
    module: 'Color',
    ref: '/docs/Graphics/Color.elm',
    desc: 'Create HSV colors. HSV stands for hue-saturation-value.\n\nHue is a degree from 0 to 360 representing a color wheel: red at 0&deg;, green at 120&deg;, blue at 240&deg;, and red again at 360&deg;. This makes it easy to cycle through colors and compute color complements, triads, tetrads, etc.\n\nSaturation is a number between 1 and 0 where lowering this number makes your color more grey. This can help you tone a color down.\n\nValue is also a number between 1 and 0. Lowering this number makes your color more black.\n\nLook up the &ldquo;HSV cylinder&rdquo; for more information.'
  },
  'hsva': {
    type: 'hsva :: Int -> Float -> Float -> Float -> Color',
    module: 'Color',
    ref: '/docs/Graphics/Color.elm',
    desc: 'Create HSV colors with an alpha component for transparency. The alpha component is specified with numbers between 0 and 1.'
  },
  'red': {
    type: 'red, green, blue, cyan, yellow, magenta, black, white, grey, gray :: Color',
    module: 'Color',
    ref: '/docs/Graphics/Color.elm',
    desc: 'Built-in colors.'
  },
  'green': {
    type: 'red, green, blue, cyan, yellow, magenta, black, white, grey, gray :: Color',
    module: 'Color',
    ref: '/docs/Graphics/Color.elm',
    desc: 'Built-in colors.'
  },
  'blue': {
    type: 'red, green, blue, cyan, yellow, magenta, black, white, grey, gray :: Color',
    module: 'Color',
    ref: '/docs/Graphics/Color.elm',
    desc: 'Built-in colors.'
  },
  'cyan': {
    type: 'red, green, blue, cyan, yellow, magenta, black, white, grey, gray :: Color',
    module: 'Color',
    ref: '/docs/Graphics/Color.elm',
    desc: 'Built-in colors.'
  },
  'yellow': {
    type: 'red, green, blue, cyan, yellow, magenta, black, white, grey, gray :: Color',
    module: 'Color',
    ref: '/docs/Graphics/Color.elm',
    desc: 'Built-in colors.'
  },
  'magenta': {
    type: 'red, green, blue, cyan, yellow, magenta, black, white, grey, gray :: Color',
    module: 'Color',
    ref: '/docs/Graphics/Color.elm',
    desc: 'Built-in colors.'
  },
  'black': {
    type: 'red, green, blue, cyan, yellow, magenta, black, white, grey, gray :: Color',
    module: 'Color',
    ref: '/docs/Graphics/Color.elm',
    desc: 'Built-in colors.'
  },
  'white': {
    type: 'red, green, blue, cyan, yellow, magenta, black, white, grey, gray :: Color',
    module: 'Color',
    ref: '/docs/Graphics/Color.elm',
    desc: 'Built-in colors.'
  },
  'grey': {
    type: 'red, green, blue, cyan, yellow, magenta, black, white, grey, gray :: Color',
    module: 'Color',
    ref: '/docs/Graphics/Color.elm',
    desc: 'Built-in colors.'
  },
  'gray': {
    type: 'red, green, blue, cyan, yellow, magenta, black, white, grey, gray :: Color',
    module: 'Color',
    ref: '/docs/Graphics/Color.elm',
    desc: 'Built-in colors.'
  },
  'plainText': {
    type: 'plainText :: String -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Display unstyled strings.'
  },
  'text': {
    type: 'text :: Text -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Display styled text.'
  },
  'asText': {
    type: 'asText :: a -> Text',
    module: 'Element',
    ref: '',
    desc: 'Convert a to textual representation, similar to Haskell Text.Show (?)'
  },
  'centeredText': {
    type: 'centeredText :: Text -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Display centered, styled text.'
  },
  'rightedText': {
    type: 'rightedText :: Text -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Display right justified, styled text.'
  },
  'justifiedText': {
    type: 'justifiedText :: Text -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Display justified, styled text.'
  },
  'image': {
    type: 'image :: Int -> Int -> String -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Display images based on dimensions and resource location.'
  },
  'fittedImage': {
    type: 'fittedImage :: Int -> Int -> String -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Display images fitted to a given width and height. The image will be scaled such that it fills the desired area without stretching the image. If the aspect ratio of the given image does not match, it will be cropped and centered.'
  },
  'images': {
    type: 'images :: Signal String -> Signal Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Asynchronously loads images given their resource locaition. The images dimensions are the default size of the image.'
  },
  'video': {
    type: 'video :: Int -> Int -> String -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Display videos based on dimensions and resource location.'
  },
  'collage': {
    type: 'collage :: Int -> Int -> [Form] -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Renders the scene specified by the given width, height, and list of primitive graphical forms. These forms can be anything including lines, shapes, images, and Elements. Every Form can be moved, scaled, and rotated. More on forms later.'
  },
  'flow': {
    type: 'flow :: Direction -> [Element] -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Display a list of Elements, flowing in the given direction.'
  },
  'up': {
    type: 'up, down, left, right, inward, outward :: Direction',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'The six possible directions for content flow. Used only with the flow function.'
  },
  'down': {
    type: 'up, down, left, right, inward, outward :: Direction',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'The six possible directions for content flow. Used only with the flow function.'
  },
  'left': {
    type: 'up, down, left, right, inward, outward :: Direction',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'The six possible directions for content flow. Used only with the flow function.'
  },
  'right': {
    type: 'up, down, left, right, inward, outward :: Direction',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'The six possible directions for content flow. Used only with the flow function.'
  },
  'inward': {
    type: 'up, down, left, right, inward, outward :: Direction',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'The six possible directions for content flow. Used only with the flow function.'
  },
  'outward': {
    type: 'up, down, left, right, inward, outward :: Direction',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'The six possible directions for content flow. Used only with the flow function.'
  },
  'above': {
    type: 'above :: Element -> Element -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: '(a `above` b) is the same as (flow down [a,b]), placing element a above element b'
  },
  'below': {
    type: 'below :: Element -> Element -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: '(a `below` b) is the same as (flow down [b,a]), placing element a below element b'
  },
  'beside': {
    type: 'beside :: Element -> Element -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: '(a `beside` b) is the same as (flow right [a,b]), placing element a to the left of element b.'
  },
  'layers': {
    type: 'layers :: [Element] -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Stack elements on top of each other from bottom to top. Equivalent to (flow outward).'
  },
  'width': {
    type: 'width :: Int -> Element -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Set the width of an element in pixels.'
  },
  'height': {
    type: 'height :: Int -> Element -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Set the width of an element in pixels.'
  },
  'size': {
    type: 'size :: Int -> Int -> Element -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Set the width and height of an element in pixels.'
  },
  'opacity': {
    type: 'opacity :: Number -> Element -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Set the opacity of an element. Requires a number between 0 and 1.'
  },
  'color': {
    type: 'color :: Color -> Element -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Set the background color of an element.'
  },
  'link': {
    type: 'link :: String -> Element -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Turn any element into a link.'
  },
  'widthOf': {
    type: 'widthOf :: Element -> Int',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Get the width of an element in pixels.'
  },
  'heightOf': {
    type: 'heightOf :: Element -> Int',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Get the width of an element in pixels.'
  },
  'sizeOf': {
    type: 'sizeOf :: Element -> (Int,Int)',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Get the width and height of an element in pixels.'
  },
  'spacer': {
    type: 'spacer :: Int -> Int -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Create an empty element. Good for adding spaces.'
  },
  'container': {
    type: 'container :: Int -> Int -> Position -> Element -> Element',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Create a container with a given width and height. Place an element at a given position within the container.'
  },
  'topLeft, midLeft, bottomLeft, midTop, middle, midBottom, topRight, midRight, bottomRight': {
    type: 'topLeft, midLeft, bottomLeft, midTop, middle, midBottom, topRight, midRight, bottomRight :: Position',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Basic positions for an element in a container.'
  },
  'topLeftAt, bottomLeftAt, middleAt, topRightAt, bottomRightAt': {
    type: 'topLeftAt, bottomLeftAt, middleAt, topRightAt, bottomRightAt :: Location -> Location -> Position',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Allows more flexible positioning of elements.'
  },
  'absolute': {
    type: 'absolute :: Int -> Location',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'An absolute location in pixels.'
  },
  'relative': {
    type: 'relative :: Float -> Location',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'A relative location, given as a percentage.'
  },
  'toForm': {
    type: 'toForm :: (Number,Number) -> Element -> Form',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Turn any Element into a Form. The given position will be the center of the resulting form.'
  },
  'sprite': {
    type: 'sprite :: String -> Number -> Number -> (Number,Number) -> Form',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Create a sprite.'
  },
  'move': {
    type: 'move :: Number -> Number -> Form -> Form',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Translate a form by a given x and y offset.'
  },
  'rotate': {
    type: 'rotate :: Number -> Number -> Form -> Form',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Rotate a form by a given fraction of a full turn (not degrees or radians). For instance, (rotate 0.5) will rotate a form by a half turn.'
  },
  'scale': {
    type: 'scale :: Number -> Form -> Form',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Scale a form by a given scale factor.'
  },
  'isWithin': {
    type: 'isWithin :: (Number,Number) -> Form -> Bool',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Check to see if a point is within a given form. Forms can be concave (e.g. the letter C).'
  },
  'rect': {
    type: 'rect :: Number -> Number -> (Number,Number) -> Shape',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Create a rectangle with a given width, height, and center position.'
  },
  'oval': {
    type: 'oval :: Number -> Number -> (Number,Number) -> Shape',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Create an oval with a given width, height, and center position.'
  },
  'circle': {
    type: 'circle :: Number -> (Number,Number) -> Shape',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Create a circle with a given radius and center position.'
  },
  'ngon': {
    type: 'ngon :: Number -> Number -> (Number,Number) -> Shape',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Create regular polygons with n sides. This function takes the number of sides, the radius (distance from the center to a vertex), and a center.'
  },
  'polygon': {
    type: 'polygon :: [(Number,Number)] -> (Number,Number) -> Shape',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Create an arbitrary polygon from an list of vertexes and a center point. The vertexes should be listed relative to the origin (0,0). They are then translated to the given center.'
  },
  'filled': {
    type: 'filled :: Color -> Shape -> Form',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Fill a shape with a given color.'
  },
  'outlined': {
    type: 'outlined :: Color -> Shape -> Form',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Outline a shape with a given color.'
  },
  'customOutline': {
    type: 'customOutline :: [Number] -> Color -> Shape -> Form',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Outline a shape with a given pattern and color. The pattern is specified by the list of numbers. For instance, the pattern [8,4] creates long dashes (8 pixels long) followed by short spaces (4 pixels long).'
  },
  'textured': {
    type: 'textured :: String -> Shape -> Form',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Fill a shape with a given texture.'
  },
  'line': {
    type: 'line :: [(Number,Number)] -> Line',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Create a line from an list of vertexes.'
  },
  'segment': {
    type: 'segment :: (Number,Number) -> (Number,Number) -> Line',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Create a line segment with a start and end point.'
  },
  'solid': {
    type: 'solid :: Color -> Line -> Form',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Create a solid line with a given color.'
  },
  'dashed': {
    type: 'dashed :: Color -> Line -> Form',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Create a dashed line with a given color.'
  },
  'dotted': {
    type: 'dotted :: Color -> Line -> Form',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Create a dotted line with a given color.'
  },
  'customLine': {
    type: 'customLine :: [Number] -> Color -> Line -> Form',
    module: 'Element',
    ref: '/docs/Graphics/Element.elm',
    desc: 'Create a custom line with a given pattern and color. The pattern is specified by the list of numbers. For instance, the pattern [8,4] creates long dashes (8 pixels long) followed by short spaces (4 pixels long).'
  },
  'toText': {
    type: 'toText :: String -> Text',
    module: 'Text',
    ref: '/docs/Graphics/Text.elm',
    desc: 'Convert a string into text which can be styled and displayed.'
  },
  'link': {
    type: 'link :: String -> Text -> Text',
    module: 'Text',
    ref: '/docs/Graphics/Text.elm',
    desc: 'Create a link.'
  },
  'header': {
    type: 'header :: Text -> Text',
    module: 'Text',
    ref: '/docs/Graphics/Text.elm',
    desc: 'Makes text big and noticable.'
  },
  'height': {
    type: 'height :: Number -> Text -> Text',
    module: 'Text',
    ref: '/docs/Graphics/Text.elm',
    desc: 'Sets the height of text in \"ems\". 1em is the normal height of text. 2ems is twice that height.'
  },
  'italic': {
    type: 'italic :: Text -> Text',
    module: 'Text',
    ref: '/docs/Graphics/Text.elm',
    desc: 'Italicize a string.'
  },
  'bold': {
    type: 'bold :: Text -> Text',
    module: 'Text',
    ref: '/docs/Graphics/Text.elm',
    desc: 'Make a string bold.'
  },
  'underline': {
    type: 'underline :: Text -> Text',
    module: 'Text',
    ref: '/docs/Graphics/Text.elm',
    desc: 'Underline a string.'
  },
  'color': {
    type: 'color :: Color -> Text -> Text',
    module: 'Text',
    ref: '/docs/Graphics/Text.elm',
    desc: 'Set the color of a string.'
  },
  'monospace': {
    type: 'monospace :: Text -> Text',
    module: 'Text',
    ref: '/docs/Graphics/Text.elm',
    desc: 'Switch to a monospace typeface. Good for code snippets.'
  },
  'typeface': {
    type: 'typeface :: String -> Text -> Text',
    module: 'Text',
    ref: '/docs/Graphics/Text.elm',
    desc: 'Set the typeface of some text. The first argument should be a comma separated listing of the desired typefaces (e.g. \"helvetica, arial, sans-serif\"). Works the same as the CSS font-family property.'
  },
  'overline': {
    type: 'overline :: Text -> Text',
    module: 'Text',
    ref: '/docs/Graphics/Text.elm',
    desc: 'Draw a line above a string.'
  },
  'strikeThrough': {
    type: 'strikeThrough :: Text -> Text',
    module: 'Text',
    ref: '/docs/Graphics/Text.elm',
    desc: 'Draw a line through a string.'
  },
  'read': {
    type: 'read :: String -> Maybe Date',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Attempt to read a date from a string.</p>'
  },
  'toTime': {
    type: 'toTime :: Date -> Time',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Convert a date into a time since midnight (UTC) of 1 January 1990 (i.e. <a href="http://en.wikipedia.org/wiki/Unix_time">UNIX time</a>). Given the date 23 June 1990 at 11:45AM this returns the corresponding time.</p>'
  },
  'year': {
    type: 'year :: Date -> Int',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Extract the year of a given date. Given the date 23 June 1990 at 11:45AM this returns the integer <code>1990</code>.</p>'
  },
  'month': {
    type: 'month :: Date -> Month',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Extract the month of a given date. Given the date 23 June 1990 at 11:45AM this returns the Month <code>Jun</code> as defined below.</p>'
  },
  'day': {
    type: 'day :: Date -> Int',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Extract the day of a given date. Given the date 23 June 1990 at 11:45AM this returns the integer <code>23</code>.</p>'
  },
  'dayOfWeek': {
    type: 'dayOfWeek :: Date -> Day',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Extract the day of the week for a given date. Given the date 23 June 1990 at 11:45AM this returns the Day <code>Thu</code> as defined below.</p>'
  },
  'hour': {
    type: 'hour :: Date -> Int',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Extract the hour of a given date. Given the date 23 June 1990 at 11:45AM this returns the integer <code>11</code>.</p>'
  },
  'minute': {
    type: 'minute :: Date -> Int',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Extract the minute of a given date. Given the date 23 June 1990 at 11:45AM this returns the integer <code>45</code>.</p>'
  },
  'second': {
    type: 'second :: Date -> Int',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Extract the second of a given date. Given the date 23 June 1990 at 11:45AM this returns the integer <code>0</code>.</p>'
  },
  'Sun': {
    type: 'data Day = Sun | Mon | Tue | Wed | Thu | Fri | Sat :: ',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Represents the days of the week.</p>'
  },
  'Mon': {
    type: 'data Day = Sun | Mon | Tue | Wed | Thu | Fri | Sat :: ',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Represents the days of the week.</p>'
  },
  'Tue': {
    type: 'data Day = Sun | Mon | Tue | Wed | Thu | Fri | Sat :: ',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Represents the days of the week.</p>'
  },
  'Wed': {
    type: 'data Day = Sun | Mon | Tue | Wed | Thu | Fri | Sat :: ',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Represents the days of the week.</p>'
  },
  'Thu': {
    type: 'data Day = Sun | Mon | Tue | Wed | Thu | Fri | Sat :: ',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Represents the days of the week.</p>'
  },
  'Fri': {
    type: 'data Day = Sun | Mon | Tue | Wed | Thu | Fri | Sat :: ',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Represents the days of the week.</p>'
  },
  'Sat': {
    type: 'data Day = Sun | Mon | Tue | Wed | Thu | Fri | Sat :: ',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Represents the days of the week.</p>'
  },
  'Jan': {
    type: 'data Month = Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec :: ',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Represents the month of the year.</p>'
  },
  'Feb': {
    type: 'data Month = Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec :: ',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Represents the month of the year.</p>'
  },
  'Mar': {
    type: 'data Month = Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec :: ',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Represents the month of the year.</p>'
  },
  'Apr': {
    type: 'data Month = Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec :: ',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Represents the month of the year.</p>'
  },
  'May': {
    type: 'data Month = Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec :: ',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Represents the month of the year.</p>'
  },
  'Jun': {
    type: 'data Month = Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec :: ',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Represents the month of the year.</p>'
  },
  'Jul': {
    type: 'data Month = Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec :: ',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Represents the month of the year.</p>'
  },
  'Aug': {
    type: 'data Month = Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec :: ',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Represents the month of the year.</p>'
  },
  'Sep': {
    type: 'data Month = Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec :: ',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Represents the month of the year.</p>'
  },
  'Oct': {
    type: 'data Month = Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec :: ',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Represents the month of the year.</p>'
  },
  'Nov': {
    type: 'data Month = Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec :: ',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Represents the month of the year.</p>'
  },
  'Dec': {
    type: 'data Month = Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec :: ',
    module: 'Date',
    ref: '/docs/Date.elm',
    desc: '<p>Represents the month of the year.</p>'
  },
  'pure': {
    type: 'pure :: (i -> o) -> Automaton i o',
    module: 'Automaton',
    ref: '/docs/Automaton.elm', 
    desc: 'Create an automaton with no memory. It just applies the given function to every input.'
  },
  'init': {
    type: 'init :: o -> (i -> o -> o) -> Automaton i o',
    module: 'Automaton',
    ref: '/docs/Automaton.elm', 
    desc: 'Create a stateful automaton. It takes a step function that uses the input and previous output to compute each new output. It also needs a default value for the first step when nothing has been output yet.'
  },
  'init\'': {
    type: 'init\' :: s -> (i -> s -> (o,s)) -> Automaton i o',
    module: 'Automaton',
    ref: '/docs/Automaton.elm', 
    desc: 'Create an automaton with hidden state. Requires an initial state and a step function to step the state forward and produce an output.'
  },
  '>>>': {
    type: '(>>>) :: Automaton a b -> Automaton b c -> Automaton a c',
    module: 'Automaton',
    ref: '/docs/Automaton.elm', 
    desc: 'Compose two automatons, chaining them together.'
  },
  '<<<': {
    type: '(<<<) :: Automaton b c -> Automaton a b -> Automaton a c',
    module: 'Automaton',
    ref: '/docs/Automaton.elm', 
    desc: 'Compose two automatons, chaining them together.'
  },
  'combine': {
    type: 'combine :: [Automaton a b] -> Automaton a [b]',
    module: 'Automaton',
    ref: '/docs/Automaton.elm', 
    desc: 'Combine a list of automatons into a single automaton that produces a list.'
  },
  'run': {
    type: 'run :: Automaton a b -> Signal a -> Signal b',
    module: 'Automaton',
    ref: '/docs/Automaton.elm', 
    desc: 'Run an automaton on a given signal. The automaton takes in &lsquo;a&rsquo; values and returns &lsquo;b&rsquo; values. The automaton steps forward whenever the input signal updates.'
  },
  'step': {
    type: 'step :: Automaton a b -> a -> (b, Automaton a b)',
    module: 'Automaton',
    ref: '/docs/Automaton.elm', 
    desc: 'Step an automaton forward once with a given input.'
  },
  'count': {
    type: 'count :: Automaton a Int',
    module: 'Automaton',
    ref: '/docs/Automaton.elm', 
    desc: 'Count the number of steps taken.'
  },
  'draggable': {
    type: 'draggable :: Form -> Automaton (Bool,(Int,Int)) Form',
    module: 'Automaton',
    ref: '/docs/Automaton.elm', 
    desc: 'Create a draggable form that can be dynamically created and added to a scene.'
  },
  '^>>': {
    type: '(^>>) :: (a -> b) -> Automaton b c -> Automaton a c',
    module: 'Automaton',
    ref: '/docs/Automaton.elm', 
    desc: 'Turn a pure function into an automaton and compose it with an existing automaton.'
  },
  '>>^': {
    type: '(>>^) :: Automaton a b -> (b -> c) -> Automaton a c',
    module: 'Automaton',
    ref: '/docs/Automaton.elm', 
    desc: ''
  },
  '<<^': {
    type: '(<<^) :: Automaton b c -> (a -> b) -> Automaton a c',
    module: 'Automaton',
    ref: '/docs/Automaton.elm', 
    desc: ''
  },
  '^<<': {
    type: '(^<<) :: (b -> c) -> Automaton a b -> Automaton a c',
    module: 'Automaton',
    ref: '/docs/Automaton.elm', 
    desc: ''
  },
  'Response': {
    type: 'data Response a = Waiting | Success a | Failure Int String :: ',
    module: 'HTTP',
    ref: '/docs/Signal/HTTP.elm', 
    desc: 'The datatype for responses. Success contains only the returned message. Failures contain both an error code and an error message.'
  },
  'Waiting': {
    type: 'data Response a = Waiting | Success a | Failure Int String :: ',
    module: 'HTTP',
    ref: '/docs/Signal/HTTP.elm', 
    desc: 'The datatype for responses. Success contains only the returned message. Failures contain both an error code and an error message.'
  },
  'Success': {
    type: 'data Response a = Waiting | Success a | Failure Int String :: ',
    module: 'HTTP',
    ref: '/docs/Signal/HTTP.elm', 
    desc: 'The datatype for responses. Success contains only the returned message. Failures contain both an error code and an error message.'
  },
  'Failure': {
    type: 'data Response a = Waiting | Success a | Failure Int String :: ',
    module: 'HTTP',
    ref: '/docs/Signal/HTTP.elm', 
    desc: 'The datatype for responses. Success contains only the returned message. Failures contain both an error code and an error message.'
  },
  'get': {
    type: 'get :: String -> Request String',
    module: 'HTTP',
    ref: '/docs/Signal/HTTP.elm', 
    desc: 'Create a GET request to the given url.'
  },
  'post': {
    type: 'post :: String -> String -> Request String',
    module: 'HTTP',
    ref: '/docs/Signal/HTTP.elm', 
    desc: 'Create a POST request to the given url, carrying the given data.'
  },
  'request': {
    type: 'request :: String -> String -> String -> [(String,String)] -> Request String',
    module: 'HTTP',
    ref: '/docs/Signal/HTTP.elm', 
    desc: 'Create a customized request. Arguments are request type (get, post, put, delete, etc.), target url, data, and a list of additional headers.'
  },
  'send': {
    type: 'send :: Signal (Request a) -> Signal (Response String)',
    module: 'HTTP',
    ref: '/docs/Signal/HTTP.elm', 
    desc: 'Performs an HTTP request with the given requests. Produces a signal that carries the responses.'
  },
  'sendGet': {
    type: 'sendGet :: Signal String -> Signal (Response String)',
    module: 'HTTP',
    ref: '/docs/Signal/HTTP.elm', 
    desc: 'Performs an HTTP GET request with the given urls. Produces a signal that carries the responses.'
  },
  'textField': {
    type: 'textField :: String -> (Element, Signal String)',
    module: 'Input',
    ref: '/docs/Signal/Input.elm', 
    desc: 'Create a standard text field and a signal that represents the current user input in that field. The input string is \"ghost-text\" that appears when the user has yet to input any text.'
  },
  'password': {
    type: 'password :: String -> (Element, Signal String)',
    module: 'Input',
    ref: '/docs/Signal/Input.elm', 
    desc: 'Create a standard password field and a signal representing its current content. The input string is \"ghost-text\" that appears when the user has yet to input any text.'
  },
  'textArea': {
    type: 'textArea :: Int -> Int -> (Element, Signal String)',
    module: 'Input',
    ref: '/docs/Signal/Input.elm', 
    desc: 'Create a larger area for text and a signal representing its content. The input integers are the width and height of the text area in characters. This is useful for longer text input.'
  },
  'checkbox': {
    type: 'checkbox :: Bool -> (Element, Signal Bool)',
    module: 'Input',
    ref: '/docs/Signal/Input.elm', 
    desc: 'Create a check box and a signal representing whether the box is checked. The input specifies the default value for the box.'
  },
  'stringDropDown': {
    type: 'stringDropDown :: [String] -> (Element, Signal String)',
    module: 'Input',
    ref: '/docs/Signal/Input.elm', 
    desc: 'Input a list of options to create a drop down menu and a signal of the currently selected option.'
  },
  'dropDown': {
    type: 'dropDown :: [(String,a)] -> (Element, Signal a)',
    module: 'Input',
    ref: '/docs/Signal/Input.elm', 
    desc: 'Input a list of options. Each option is a pair containing the text to be displayed and a corresponding value of any type. This creates a drop down menu and a signal of the value corresponding to the currently selected option.'
  },
  'button': {
    type: 'button :: String -> (Element, Signal Bool)',
    module: 'Input',
    ref: '/docs/Signal/Input.elm', 
    desc: 'Create a button and a signal representing whether the button has been pressed. The input specifies the string displayed on the button.'
  },
  'keysDown': {
    type: 'keysDown :: Signal [Int]',
    module: 'Raw',
    ref: '/docs/Signal/KeyboardRaw.elm', 
    desc: 'The key codes of they keboard keys that are currently pressed, in the order that they were pressed. The key codes are equal to the JavaScript keyCode for each key.'
  },
  'charPressed': {
    type: 'charPressed :: Signal (Maybe Int)',
    module: 'Raw',
    ref: '/docs/Signal/KeyboardRaw.elm', 
    desc: 'The char code of the currently pressed key. When a key is pressed, its char code appears in this signal very briefly. The chare codes are given by the JavaScript expression (e.charCode || e.keyCode)'
  },
  'position': {
    type: 'position :: Signal (Int,Int)',
    module: 'Mouse',
    ref: '/docs/Signal/Mouse.elm', 
    desc: 'The current mouse position.'
  },
  /* Too easily interferes with x and y variable names - need more context from Codemirror to use
  'x': {
    type: 'x :: Signal Int',
    module: 'Mouse',
    ref: '/docs/Signal/Mouse.elm', 
    desc: 'The current x-coordinate of the mouse.'
  },
  'y': {
    type: 'y :: Signal Int',
    module: 'Mouse',
    ref: '/docs/Signal/Mouse.elm', 
    desc: 'The current y-coordinate of the mouse.'
  }, */
  'isDown': {
    type: 'isDown :: Signal Bool',
    module: 'Mouse',
    ref: '/docs/Signal/Mouse.elm', 
    desc: 'The current state of the left mouse-button. True when the button is down, and false otherwise.'
  },
  'isClicked': {
    type: 'isClicked :: Signal Bool',
    module: 'Mouse',
    ref: '/docs/Signal/Mouse.elm', 
    desc: 'True immediately after the left mouse-button has been clicked, and false otherwise.'
  },
  'clicks': {
    type: 'clicks :: Signal ()',
    module: 'Mouse',
    ref: '/docs/Signal/Mouse.elm', 
    desc: 'Always equal to unit. Event triggers on every mouse click.'
  },
  'isClickedOn': {
    type: 'isClickedOn :: Element -> (Element, Signal Bool)',
    module: 'Mouse',
    ref: '/docs/Signal/Mouse.elm', 
    desc: 'Determine whether an element has been clicked. The resulting pair is a signal of booleans that is true when its paired element has been clicked. The signal is True immediately after the left mouse-button has been clicked, and false otherwise.'
  },
  'inRange': {
    type: 'inRange :: Int -> Int -> Signal Int',
    module: 'Random',
    ref: '/docs/Signal/Random.elm', 
    desc: 'Given a range from low to high, this produces a random number between \'low\' and \'high\' inclusive. The value in the signal does not change after the page has loaded.'
  },
  'randomize': {
    type: 'randomize :: Int -> Int -> Signal a -> Signal Int',
    module: 'Random',
    ref: '/docs/Signal/Random.elm', 
    desc: 'Given a range from low to high and a signal of values, this produces a new signal that changes whenever the input signal changes. The new values are random number between \'low\' and \'high\' inclusive.'
  },
  '<~': {
    type: '(<~) :: (a -> b) -> Signal a -> Signal b',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>An alias for <code>lift</code>. A prettier way to apply a function to the current value of a signal.</p>'
  },
  '~': {
    type: '(~) :: Signal (a -> b) -> Signal a -> Signal b',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>Signal application. This takes two signals, holding a function and a value. It applies the current function to the current value.</p><p>So the following expressions are equivalent:</p> <pre><code>scene &lt;~ Mouse.x ~ Mouse.y\nlift2 scene Mouse.x Mouse.y</code></pre>'
  },
  'constant': {
    type: 'constant :: a -> Signal a',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>Create a constant signal that never changes.</p>'
  },
  'lift': {
    type: 'lift :: (a -> b) -> Signal a -> Signal b',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>Transform a signal with a given function.</p>'
  },
  'lift2': {
    type: 'lift2 :: (a -> b -> c) -> Signal a -> Signal b -> Signal c',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>Combine two signals with a given function.</p>'
  },
  'lift3': {
    type: 'lift3 :: (a -> b -> c -> d) -> Signal a -> Signal b -> Signal c -> Signal d',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>Combine three signals with a given function.</p>'
  },
  'merge': {
    type: 'merge :: Signal a -> Signal a -> Signal a',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>Merge two signals into one, biased towards the first signal if both signals update at the same time.</p>'
  },
  'merges': {
    type: 'merges :: [Signal a] -> Signal a',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>Merge many signals into one, biased towards the left-most signal if multiple signals update simultaneously.</p>'
  },
  'foldp': {
    type: 'foldp :: (a -> b -> b) -> b -> Signal a -> Signal b',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>Create a past-dependent signal. Each value given on the input signal will be accumulated, producing a new output value.</p><p>For instance</p> <pre><code>(foldp (\\t acc -&gt; acc + 1) 0 (Time.every second))</code></pre> <p>increments every second.</p> '
  },
  'count': {
    type: 'count :: Signal a -> Signal Int',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>Count the number of events that have occured.</p>'
  },
  'countIf': {
    type: 'countIf :: (a -> Bool) -> Signal a -> Signal Int',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>Count the number of events that have occured that satisfy a given predicate.</p>'
  },
  'average': {
    type: 'average :: Int -> Signal Number -> Signal Float',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>Takes an integer <code>n</code> and a signal of numbers. Computes the running average of the signal over the last <code>n</code> events.</p><p>So <code>(average 20 (fps 40))</code> would be the average time between the frames for the last 20 frames.</p> '
  },
  'foldp1': {
    type: 'foldp1 :: (a -> a -> a) -> Signal a -> Signal a',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>Create a past-dependent signal. The first value on the signal is used as the base case.</p>'
  },
  'foldp\'': {
    type: 'foldp\' :: (a -> b -> b) -> (a -> b) -> Signal a -> Signal b',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>Just like foldp, but instead of a base case, you provide a function to be applied to the first value, creating the base case.</p>'
  },
  'keepIf': {
    type: 'keepIf :: (a -> Bool) -> a -> Signal a -> Signal a',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>Keep only events that satisfy the given predicate. Elm does not allow undefined signals, so a base case must be provided in case the predicate is never satisfied.</p>'
  },
  'dropIf': {
    type: 'dropIf :: (a -> Bool) -> a -> Signal a -> Signal a',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>Drop events that satisfy the given predicate. Elm does not allow undefined signals, so a base case must be provided in case the predicate is never satisfied.</p>'
  },
  'keepWhen': {
    type: 'keepWhen :: Signal Bool -> a -> Signal a -> Signal a',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>Keep events only when the first signal is true. When the first signal becomes true, the most recent value of the second signal will be propagated. Until the first signal becomes false again, all events will be propagated. Elm does not allow undefined signals, so a base case must be provided in case the first signal is never true.</p>'
  },
  'dropWhen': {
    type: 'dropWhen :: Signal Bool -> a -> Signal a -> Signal a',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>Drop events when the first signal is true. When the first signal becomes false, the most recent value of the second signal will be propagated. Until the first signal becomes true again, all events will be propagated. Elm does not allow undefined signals, so a base case must be provided in case the first signal is always true.</p>'
  },
  'dropRepeats': {
    type: 'dropRepeats :: Signal a -> Signal a',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>Drop sequential repeated values. For example, if a signal produces the sequence <code>[1,1,2,2,1]</code>, it becomes <code>[1,2,1]</code> by dropping the values that are the same as the previous value.</p>'
  },
  'sampleOn': {
    type: 'sampleOn :: Signal a -> Signal b -> Signal b',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: '<p>Sample from the second input every time an event occurs on the first input. For example</p> <pre><code>(sampleOn clicks (every second))</code></pre> <p> will give the approximate time of the latest click.</p>'
  },
  'lift4': {
    type: 'lift4 :: (a -> b -> c -> d -> e)\n      -> Signal a -> Signal b -> Signal c -> Signal d -> Signal e',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: ''
  },
  'lift5': {
    type: 'lift5 :: (a -> b -> c -> d -> e -> f)\n      -> Signal a -> Signal b -> Signal c -> Signal d -> Signal e -> Signal f',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: ''
  },
  'lift6': {
    type: 'lift6 :: (a -> b -> c -> d -> e -> f -> g)\n      -> Signal a -> Signal b -> Signal c -> Signal d -> Signal e -> Signal f -> Signal g',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: ''
  },
  'lift7': {
    type: 'lift7 :: (a -> b -> c -> d -> e -> f -> g -> h)\n      -> Signal a -> Signal b -> Signal c -> Signal d -> Signal e -> Signal f -> Signal g -> Signal h',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: ''
  },
  'lift8': {
    type: 'lift8 :: (a -> b -> c -> d -> e -> f -> g -> h -> i)\n      -> Signal a -> Signal b -> Signal c -> Signal d -> Signal e -> Signal f -> Signal g -> Signal h -> Signal i',
    module: 'Signal',
    ref: '/docs/Signal/Signal.elm', 
    desc: ''
  },
  'hour': {
    type: 'hour, minute, second, ms :: Time',
    module: 'Time',
    ref: '/docs/Signal/Time.elm', 
    desc: '<p>Units of time, making it easier to specify things like a half-second <code>(second / 2)</code>.</p>'
  },
  'minute': {
    type: 'hour, minute, second, ms :: Time',
    module: 'Time',
    ref: '/docs/Signal/Time.elm', 
    desc: '<p>Units of time, making it easier to specify things like a half-second <code>(second / 2)</code>.</p>'
  },
  'second': {
    type: 'hour, minute, second, ms :: Time',
    module: 'Time',
    ref: '/docs/Signal/Time.elm', 
    desc: '<p>Units of time, making it easier to specify things like a half-second <code>(second / 2)</code>.</p>'
  },
  'ms': {
    type: 'hour, minute, second, ms :: Time',
    module: 'Time',
    ref: '/docs/Signal/Time.elm', 
    desc: '<p>Units of time, making it easier to specify things like a half-second <code>(second / 2)</code>.</p>'
  },
  'fps': {
    type: 'fps :: Number -> Signal Time',
    module: 'Time',
    ref: '/docs/Signal/Time.elm', 
    desc: '<p>Takes desired number of frames per second (fps). The resulting signal gives a sequence of time deltas as quickly as possible until it reaches the desired FPS. A time delta is the time between the last frame and the current frame.</p>'
  },
  'fpsWhen': {
    type: 'fpsWhen :: Number -> Signal Bool -> Signal Time',
    module: 'Time',
    ref: '/docs/Signal/Time.elm', 
    desc: '<p>Same as the fps function, but you can turn it on and off. Allows you to do brief animations based on user input without major ineffeciencies. The first time delta after a pause is always zero, no matter how long the pause was. This way summing the deltas will actually give the amount of time that the output signal has been running.</p>'
  },
  'every': {
    type: 'every :: Time -> Signal Time',
    module: 'Time',
    ref: '/docs/Signal/Time.elm', 
    desc: '<p>Takes a time interval <code>t</code>. The resulting signal is the current time, updated every <code>t</code>.</p>'
  },
  'delay': {
    type: 'delay :: Time -> Signal a -> Signal a',
    module: 'Time',
    ref: '/docs/Signal/Time.elm', 
    desc: '<p>Delay a signal by a certain amount of time. So <code>(delay second Mouse.clicks)</code> will update one second later than any mouse click.</p>'
  },
  'since': {
    type: 'since :: Time -> Signal a -> Signal Bool',
    module: 'Time',
    ref: '/docs/Signal/Time.elm', 
    desc: '<p>Takes a time <code>t</code> and any signal. The resulting boolean signal is true for time <code>t</code> after every event on the input signal. So</p> <pre> <code>(second `since` Mouse.clicks)</code> </pre> <p>would result in a signal that is true for one second after each mouse click and false otherwise.</p>'
  },
  'timestamp': {
    type: 'timestamp :: Signal a -> Signal (Time,a)',
    module: 'Time',
    ref: '/docs/Signal/Time.elm', 
    desc: '<p>Add a timestamp to any signal. Timestamps increase monotonically. Each timestamp is related to a specfic event, so <code>Mouse.x</code> and <code>Mouse.y</code> will always have the same timestamp because they both rely on the same underlying event.</p>'
  },
  'timeOf': {
    type: 'timeOf :: Signal a -> Signal Time',
    module: 'Time',
    ref: '/docs/Signal/Time.elm', 
    desc: '<p>Same as <code>timestamp</code> but it throws out the incoming value. So</p> <pre><code>(timeOf == lift fst . timestamp)</code></pre>'
  },
  'inHours': {
    type: 'inHours, inMinutes, inSeconds, inMss :: Time -> Float',
    module: 'Time',
    ref: '/docs/Signal/Time.elm', 
    desc: '<p>Unit conversions for times.</p> <pre> <code>(inHours (30 * minute) == 0.5)</code></pre>'
  },
  'inMinutes': {
    type: 'inHours, inMinutes, inSeconds, inMss :: Time -> Float',
    module: 'Time',
    ref: '/docs/Signal/Time.elm', 
    desc: '<p>Unit conversions for times.</p> <pre> <code>(inHours (30 * minute) == 0.5)</code></pre>'
  },
  'inSeconds': {
    type: 'inHours, inMinutes, inSeconds, inMss :: Time -> Float',
    module: 'Time',
    ref: '/docs/Signal/Time.elm', 
    desc: '<p>Unit conversions for times.</p> <pre> <code>(inHours (30 * minute) == 0.5)</code></pre>'
  },
  'inMss': {
    type: 'inHours, inMinutes, inSeconds, inMss :: Time -> Float',
    module: 'Time',
    ref: '/docs/Signal/Time.elm', 
    desc: '<p>Unit conversions for times.</p> <pre> <code>(inHours (30 * minute) == 0.5)</code></pre>'
  },
  'toDate': {
    type: 'toDate :: Time -> Date',
    module: 'Time',
    ref: '/docs/Signal/Time.elm', 
    desc: '<p>Convert a Time to a Date, as specified in the <a href="/docs/Date.elm">Date</a> library.</p>'
  },
  'read': {
    type: 'read :: String -> Maybe Time',
    module: 'Time',
    ref: '/docs/Signal/Time.elm', 
    desc: '<p>Read a time in from a string. Follows the same rules as JavaScript’s <code>Date.parse</code> function.</p>'
  },
  'dimensions': {
    type: 'dimensions :: Signal (Int,Int)',
    module: 'Window',
    ref: '/docs/Signal/Window.elm', 
    desc: 'The current dimensions of the window (i.e. the area viewable to the user, not including scroll bars).'
  },
  'width': {
    type: 'width :: Signal Int',
    module: 'Window',
    ref: '/docs/Signal/Window.elm', 
    desc: 'The current width of the window.'
  },
  'height': {
    type: 'height :: Signal Int',
    module: 'Window',
    ref: '/docs/Signal/Window.elm', 
    desc: 'The current height of the window.'
  },
}
