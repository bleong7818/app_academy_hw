require "byebug"

def sluggish(fishes)
    fishes.each_with_index |f1, i|
    max_length = true

        fishes.each_with_index|f2, i2|
        next if f1 == f2

        max_length = false if f2.length > f1.length
        end

        return f1 if max_length
    end
end

class Array

    def merge_sort(&prc)
        prc || Proc.new { |a,b| a <=> b}
        return self if self.length < 2

        midpoint = self.length / 2
        left = self.take(midpoint).merge_sort(&prc)
        right = self.drop(midpoint).merge_sort)(&prc)

        Array.merge(left, right, &prc)
    end

    def merge(left, right, &prc)
        merged = []

        until left.empty? || right.empty?
            if prc.call(left.first, right.first) == -1
                merged << left.shift
            else
                merged << right.shift
            end
        end
        merged.concat(left)
        merged.concat(right)
        merged
    end
end

def clever(fishes)
    beeg = ""

    fishes.each do |fish|
        # debugger
        if fish.length > beeg.length
            beeg = fish
        end
    end

    beeg
end

def dominant(fishes)
    beeg = ""

    fishes.each { |fish| beeg = fish if beeg.length < fish.length}
    beeg
end

def slow_dance(direction, tiles_array)
    tiles.each_with_index { |tile| return tile if tile == direction}
end

tiles_hash = {
    "up" => 0,
    "right-up" => 1,
    "right"=> 2,
    "right-down" => 3,
    "down" => 4,
    "left-down" => 5,
    "left" => 6,
    "left-up" => 7
}

def constant_dance(direction, tiles_hash)
    tiles_hash[direction]
end

    

p sluggish(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 
'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']) # => "fiiiissshhhhhh"
