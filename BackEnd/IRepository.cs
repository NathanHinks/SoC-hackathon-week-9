using System.Collections.Generic;
using System.Threading.Tasks;
using System.Numerics;


public interface IRepository<T>
{
    Task<T> Get(long id);

    //Task<T> Update(T t);
    Task<T> Insert(T t);

}