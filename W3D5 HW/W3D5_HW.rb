class Stack


    def initialize(stack)
      @stack = stack
    end

    def push(el)
      @stack << el
    end

    def pop
      @stack.pop
    end

    def peek
      puts @stack[-1]
    end
  end

class Queue

  def initialize(queue)
    @queue = queue
  end

  def enqueue(el)
    @queue << el
  end


  def dequeue
    @queue.shift
  end

  def peek
    p @queue[-1]
  end


end

