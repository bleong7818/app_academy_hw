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




