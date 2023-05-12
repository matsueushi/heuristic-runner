import json

N = 3

if __name__ == "__main__":
    data = []
    for i in range(N):
        with open(f"data/{i:04}.txt") as f:
            contents = f.read()
            data.append({
                "seed": i,
                "input": contents
            })

    with open('input.json', 'w') as f:
        json.dump(data, f, indent=4)
