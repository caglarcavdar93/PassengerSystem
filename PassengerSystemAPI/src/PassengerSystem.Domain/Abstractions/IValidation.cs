using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PassengerSystem.Domain.Abstractions
{
    public interface IValidation<T> where T : class
    {
        public T ValidationModel { get; set; }
        public void Validate();
    }
}
