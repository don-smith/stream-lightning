# A Lightning Talk on pull-stream

This is a small lightning talk I gave at the Auckland Node.js meetup.


## Outline

* What are streams?
  - An interface to process data that could be large or infinite in size
  - Are most often _used_, but can also be _created_
* What are Node.js streams?
  - Often uses the observer pattern (events)
  - Can also use piping and direct reads
  - Types of streams: Readable, Writeable, Duplex, Transform
* What is a pull-stream?
  - A minimal take on streams
  - More functional&trade;
  - No inheritance
  - Nicely composable


## Flow of the talk

* Part one was about steams in Node.js
  - We looked at how to create a simple `Readable` stream: `node-stream/source.js`
  - We saw how to use that `Source` module: `node-stream/use-source.js`
    * To run this in your terminal, from the main repository directory: `node node-stream/use-source`
  - Then we looked at how to create a simple `Writable` stream: `node-stream/drain.js`
  - Then we saw how to use that `Drain` module: `node-stream/use-drain.js`
    * To run this in your terminal, from the main repository directory: `node node-stream/use-drain`
* Part two was about pull-stream, a more minimal and functional take on streams
  - We looked at how to create (by hand, without pull-stream) a simple `Source` function: `pull-stream/source.js`
  - We saw how to use that `Source` module: `pull-stream/use-source.js`
    * To run this in your terminal, from the main repository directory: `node pull-stream/use-source`
  - Then we looked at how to create a simple `Sink` function: `pull-stream/sink.js`
  - Then we saw how to use that `Sink` module: `pull-stream/use-sink.js`
    * To run this in your terminal, from the main repository directory: `node pull-stream/use-sink`
* The take-away is how elegantly the pull-stream pattern composes in `pull-stream/use-sink.js`: `sink(source(data))`
  - We didn't look at duplex, transform, or pass-through streams, but the elegance remains regardless of how much composition we need.


## Links

* [pull-stream repository](https://github.com/pull-stream/pull-stream)
* [Dominic's blog entry](http://dominictarr.com/post/149248845122/pull-streams-pull-streams-are-a-very-simple)
* [pull-stream examples](https://github.com/dominictarr/pull-stream-examples)
* [pull-stream workshop](https://github.com/pull-stream/pull-stream-workshop)
