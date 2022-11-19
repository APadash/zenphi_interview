using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Services.IService;
using Domain.Common.Dto.User;
using Domain.Common.Helper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<ApiResponse<bool>> Create(UserDto add, CancellationToken cancellationToken)
        {
            var result = await _service.AddService(add, cancellationToken);
            return result;
        }

    }
}