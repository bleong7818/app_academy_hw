require "byebug"
class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    take_turn

    until @game_over
      take_turn
    end
    
    if @game_over
      game_over_message
      reset_game
    end
  end

  def take_turn
    show_sequence
    require_sequence

    unless @game_over
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
  end

  def require_sequence
    puts "Repeat the sequence by entering the first letter of the colors shown."
      seq.each do |color|
        input = gets.chomp
          if input != color[0]
            game_over = true
            break
          end
      end
      sleep(0.25)
  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    puts "Good job! Onto the the next round."
  end

  def game_over_message
    "Nooooooooo..."
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
