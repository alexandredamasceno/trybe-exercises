def big_number(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2


print(big_number(4, 6))

# Ex 2:


def media(list):
    sum = 0
    for item in list:
        sum += item
    return sum / len(list)


print(media([1, 2, 3, 4, 5]))


def asteriscos(n):
    qntd = ''
    for index in range(n):
        qntd += '*'
    for go in range(n):
        print(qntd)


asteriscos(8)


print(3 * 'bla')
