

function multiplyValue (value : number, multiplier : number = 2) : number  {

    return value * multiplier
}








function processInput(value : string | boolean | number ) :  string | number {

    if (typeof value === "string") {

        return value.trim().toLowerCase()
    }

    if (typeof value === "number") {

         return value * 10
    }
       return value ? "Active" : "Inactive"
}






function formatCoordinate(
    coordinate : readonly  [number, number, string]) : string {

   const latitude: number = coordinate[0]
    const longitude: number = coordinate[1]
    const locationName: string = coordinate[2]

      return `Location: ${locationName} (${latitude}, ${longitude})`
}







function concatenateArrays<T>(...arrays: T[][]): T[] {

  const result: T[] = [];

  for (const array of arrays) {

    result.push(...array);
  }

  return result
}









interface Course { title: string; students: number; isPublished: boolean;}

function getPopularCourses( courses: Course[], minStudents: number): Course[] {

    const popularCourses: Course[] = courses.filter(

    (course: Course) => {

            return course.isPublished === true &&
                   course.students >= minStudents;
        }
    );

    return popularCourses;
}









function pluckValues<T, Key extends keyof T>(
    items: T[],key: Key): T[Key][] {

    const result: T[Key][] = [];

    for (const item of items) {
        result.push(item[key]);
    }

    return result;
}









class Employee {

    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {

        this.name = name
        this.baseSalary = baseSalary
    }

    getDetails(): string {

        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {

    private department: string;

    constructor( name: string, baseSalary: number, department: string) {

        super(name, baseSalary);

        this.department = department;

    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}








function validateAgeAsync(age: number): Promise<string> {

    return new Promise((resolve, reject) => {

     if (age >= 18) {
       setTimeout(() => {

      resolve("Access Granted");
            }, 1000);

        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }

    });

}