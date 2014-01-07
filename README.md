## rework-clearfix [![Build Status](https://travis-ci.org/fgnass/rework-clearfix.png)](https://travis-ci.org/fgnass/rework-clearfix)

[Rework](https://github.com/visionmedia/rework) plugin that adds support for
`clear: content` which will expand to the
[micro clearfix](http://nicolasgallagher.com/micro-clearfix-hack/) hack:

### Example

```css
.foo {
  clear: content;
}
```

Yields:

```css
.foo {
  *zoom: 1;
}

.foo:before,
.foo:after {
  content: " ";
  display: table;
}

.foo:after {
  clear: both;
}
```

### Usage

```js
  var rework = require('rework');
  var clearfix = require('rework-clearfix');

  rework(css).use(clearfix);
```

### The MIT License (MIT)

Copyright (c) 2013 Felix Gnass

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
