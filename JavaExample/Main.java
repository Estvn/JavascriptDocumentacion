package JavaExample;

public class Main {

    public static void main(String[] args) {
        
        Student stu = new Student();

        //Se puede acceder a los static de esta forma, pero es mala práctica, ya que el atributo static no es privado
        //System.out.println(Person.counter);

        //Los atributos static deben ser privados para no ser modificados desde cualquier lado.
        //Para acceder a los atributos static se deben crear métodos get y set estáticos.
        System.out.println(Student.getCounter());

    }

    
}
