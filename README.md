# Number
Only combination of 1 is allowed. For example, 1, 11, 111.

# Boolean
You can make boolean by == and !=. For example, you can obtain true and false by below code.
```
1==1, 1!=1
```

# Operations
+, -, ++, --, ==, !=, !, || are the operations you can use. For example, you can obtain 10 by below code.
```
11-1
```
++ means += 1 and -- means -= 1. ! means 'not' and || means 'or'.
You should make 'and' by ! and ||. Use De Morgan's theorem.

# Print
To print 5,
```
_(1+1+1+1+1)
```

# Variable
Variable name must can be made of I, l, 1. However, it cannot start with 1. Also, single I cannot be a variable name.
You should put I at first to declare variable. (i.e. I is let in javascript) It is block scope.
```
I ll = 111
_ll
```
In ll, 111 would be saved and 111 would be printed.

# Input
l has the value of the input. Therefore, you do not need to and should not declare l as a variable. l is only a natural number. Bolow code prints the input.
```
_l
```

# While
/ is while. For example, you can print 1, 2, 3, 4, 5 by below code.
```
I ll = 1
/(ll != 1+1+1+1+1+1) {
    _ll
    ll++
}
```

# If
There is no if. You can use while instead of if. Let ll be a condition that you want to check. You can make if by below code.
```
/(ll) {
    ll = 1 != 1
}
```