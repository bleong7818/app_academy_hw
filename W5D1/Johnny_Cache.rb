class LRUCache
    attr_reader :cache

    def initialize(size)
        @size = size
        @cache = []
    end

    def count
      # returns number of elements currently in cache
      cache.size
    end

    def add(el)
        if cache.include?(el)
            cache.delete(el)
            cache << el
        elsif cache.size >= @size
            cache.shift
            cache << el
        else
            cache << el
        end
      # adds element to cache according to LRU principle
    end

    def show
        p cache
        nil
      # shows the items in the cache, with the LRU item first
    end

    private
    # helper methods go here!

  end