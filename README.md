# A Lightning Talk on pull-stream

This is a small lightning talk I gave at the Auckland Node.js meetup.

## Outline

* What are streams?
  - An interface to process data that could be large or infinite in size
  - Are most often _used_, but can also be _created_
* What are Node.js streams?
  - Often uses the observer pattern (events)
  - Types: Readable, Writeable, Duplex, Transform
* What is a pull-stream?
  - A minimal take on streams
  - More functional (TM)
  - No inheritance
  - Nicely composable
