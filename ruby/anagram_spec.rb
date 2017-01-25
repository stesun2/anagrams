require_relative 'anagram'

# This should return a bunch of trues
puts is_anagram?('charm', 'march') == true
puts is_anagram?('zach', 'attack') == false
puts is_anagram?('CharM', 'mARcH') == true
puts is_anagram?('abcde2', 'c2abed') == true

puts "This test is for the challenge quesiton"
puts is_anagram?('Anna Madrigal', 'A man and a girl') == true
