// Add your Circle class here
class Circle { 
    constructor(radius) { 
        this.radius = radius
    }

    get diameter() { 
        return this.radius * 2
    }

    set diameter(diameter) { 
        this.radius = diameter / 2
    }

    get circumference() { 
        return this.diameter * Math.PI
    }

    get area() { 
        return Math.PI * (this.radius * this.radius) 
    }


    set circumference(circumference) { 
        this.radius = circumference / (Math.PI * 2)
    }
}