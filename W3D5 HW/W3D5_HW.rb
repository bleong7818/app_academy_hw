class Stack

    def initialize
      @vault= vault
    end

    def push(el)
      vault << el
      self
    end

    def pop
      vault.pop
    end

    def peek
      puts vault[-1]
    end

    def size
      vault.length
    end

    def empty?
      vault.empty?
    end

    def inspect
      "#<Stack:#{self.object_id}>"
    end

    private
    attr_reader :vault
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

class Map


  def initialize(map)
    @map = map
  end

  def set(key, value)
    @map << [key, value]
  end

  def get(key)
    
  end

  def delete(key)

  end

  def show

  end

end