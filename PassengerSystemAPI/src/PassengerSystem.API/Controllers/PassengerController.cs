using CheckInSystem.Domain.Entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PassengerSystem.Application.Services.PassengerServices;
using PassengerSystem.Application.Services.PassengerServices.Dto;
using PassengerSystem.Domain.Abstractions;
using PassengerSystem.Domain.ValueObjects;

namespace PassengerSystem.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class PassengerController : Controller
    {
        private readonly IPassengerService _passengerService;
        private readonly ICreatePassengerUseCase _createPassengerUseCase;
        private readonly IUpdatePassengerUseCase _updatePassengerUseCase;
        public PassengerController(IPassengerService passengerService,
             ICreatePassengerUseCase createPassengerUseCase,
             IUpdatePassengerUseCase updatePassengerUseCase)
        {
            _passengerService = passengerService;
            _createPassengerUseCase = createPassengerUseCase;
            _updatePassengerUseCase = updatePassengerUseCase;
        }
        [HttpGet]
        [Route("/GetPassengers")]
        public async Task<List<Passenger>> GetPassengers()
        {
            return await _passengerService.GetAllPassengers();
        }
        [HttpGet]
        [Route("/GetPassengerbyId")]
        public Passenger GetPassengerbyId(string id)
        {
            return _passengerService.GetPassengerById(id);
        }
        [HttpPost]
        [Route("/AddPassenger")]
        public async Task<Passenger> AddPassenger([FromBody] PassengerValidationModel model)
        {
            return await _createPassengerUseCase.CreatePassenger(model);
        }
        [HttpPut]
        [Route("/UpdatePassenger")]
        public async Task<Passenger> UpdatePassenger([FromBody] PassengerValidationModel model)
        {
            return await _updatePassengerUseCase.UpdatePassenger(model);
        }
        [HttpDelete]
        [Route("/DeletePassenger")]
        public async Task DeletePassenger([FromBody] DeletePassenger deletePassenger)
        {
            await _passengerService.DeletePessenger(deletePassenger);
        }
    }
}
