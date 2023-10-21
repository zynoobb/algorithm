import sys
data_temp = sys.stdin if sys.platform == 'linux' else open('입력.txt', 'r')
input_data = data_temp.read().splitlines()

def solution (data) :
 [answer], arr = map(lambda x : list(map(int, x.split())), data)  
 print(len([v for v in arr if v == answer]))

solution(input_data)
