lower, upper = 137683, 596253

# If sorted string is the same as original string, and if the length of the set of the chars is not the same as the length of the original string
print ("Part 1", len([x for x in range(lower, upper) if ''.join(sorted(str(x))) == str(x) and len(set(str(x))) != len(str(x))]))

# If sorted string is the same as original string, and there exists a character that repeats itself 2 times
print ("Part 2", len([x for x in range(lower, upper) if ''.join(sorted(str(x))) == str(x) and 2 in {a:sorted(str(x)).count(a) for a in sorted(str(x))}.values()]))

