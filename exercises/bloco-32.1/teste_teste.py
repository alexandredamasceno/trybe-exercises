import math


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


def qntd_tinta(metros):
    price_per_cans_of_18liters = 80.00
    liters = metros / 3
    cans = math.ceil(liters / 18)
    total_price = cans * price_per_cans_of_18liters
    total = (cans, total_price)
    return total


print(qntd_tinta(60))


def witch_triang(l1, l2, l3):
    if l1 + l2 < l3:
        return "não é um triangulo"
    elif l1 == l2 and l1 == l3 and l3 == l2:
        return "Triângulo Equilátero"
    elif l1 == l2 or l1 == l3 or l3 == l2:
        return "Triângulo Isósceles"
    else:
        return "Triângulo Escaleno"


print(witch_triang(30, 10, 20))
