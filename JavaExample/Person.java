package JavaExample;

public class Person {

    private static int counter = 0;

    public Person(){
        Person.counter++;
    }
    
    public static int getCounter(){
        return Person.counter;
    }
}
