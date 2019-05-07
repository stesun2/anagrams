from anagram import is_anagram

# This should return a bunch of trues
print(is_anagram('charm', 'march') == True)
print(is_anagram('zach', 'attack') == False)
print(is_anagram('CharM', 'mARcH') == True)
print(is_anagram('abcde2', 'c2abed') == True)

print("This test is for the challenge quesiton")
print(is_anagram('Anna Madrigal', 'A man and a girl') == True)


# Can you translate this driver code to unit tests?
