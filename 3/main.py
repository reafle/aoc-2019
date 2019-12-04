FILENAME='./test1-0'

def readData():
    f = list(open(FILENAME))
    return map(lambda line : line[:-1].split(','), f)

def endedRange(i,j,k=1):
    return range(i+k,j+k,k)

class Map:
    wires = []
    wire = []
    position = [0, 0]

    def endWire(self):
        self.wires.append(self.wire)
        self.wire = []
        self.position = [0, 0]

    def plotWire(self, coords):
        direction = coords[:1]
        steps = int(coords[1:]) if direction in ['U', 'R'] else -int(coords[1:])

        if (direction in ['R','L']):
            newPosition = self.position[0] + steps
            stepRange = endedRange(self.position[0], newPosition) if steps > 0 else endedRange(self.position[0], newPosition, -1)
            for i in stepRange:
                self.wire.append((i, self.position[1]))
                self.position[0] = newPosition

        if (direction in ['U','D']):
            newPosition = self.position[1] + steps
            stepRange = endedRange(self.position[1], newPosition) if steps > 0 else endedRange(self.position[1], newPosition, -1)
            for i in stepRange:
                self.wire.append((self.position[0], i))
                self.position[1] = newPosition

    def outputPoints(self):
        i = 1
        for wire in self.wires:
            print('wire %d:' % i, wire)
            i += 1

    def intersections(self):
        A = set([x for x in self.wires[0]])
        B = set([x for x in self.wires[1]])

        return A & B

    def closestDistance(self):
        distances = set()
        for x, y in self.intersections():
            distances.add(abs(x)+abs(y))
        print(sorted(distances))

    def leastStepsTaken(self):
        distances = set()
        for common in self.intersections():
            steps1 = self.wires[0].index(common) + 1
            steps2 = self.wires[1].index(common) + 1
            distances.add(steps1+steps2)
        print(sorted(distances))

if __name__ == '__main__':
    wire1, wire2 = readData()
    wires = [wire1, wire2]

    myMap = Map()
    for wire in wires:
        for step in wire:
            myMap.plotWire(step)
        myMap.endWire()

    print("==Debug==")
    print("wires:", wires)
    print(myMap.outputPoints())
    print("Intersections: ", myMap.intersections())
    print("==end debug==")
    print("Intersection sorted by distance: ")
    print(myMap.closestDistance())
    print("Intersection sorted by number of step: ")
    print(myMap.leastStepsTaken())

