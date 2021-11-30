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


# def asteriscos(n):
#     qntd = ''
#     for index in range(n):
#         qntd += '*'
#     for go in range(n):
#         print(qntd)

# refatorando o cógido acima
def asteriscos(n):
    qntd = n * "*"
    for index in range(n):
        print(qntd)


asteriscos(8)

# o python sabe multiplicar sequências
print(3 * "bla")


def big_name(list):
    the_name = list[0]
    for name in list:
        if len(name) > len(the_name):
            the_name = name
    return the_name


print(big_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
