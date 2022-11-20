using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain.Common.Dto.User;
using Domain.Common.Helper;

namespace Application.Services.IService
{
    public interface IUserService
    {
        Task<ApiResponse<bool>> AddService(UserDto add, CancellationToken cancellationToken);
        Task<ApiResponse<bool>> EditService(UserDto edit, CancellationToken cancellationToken);
        Task<ApiResponse<bool>> DeleteService(int userId, CancellationToken cancellationToken);
    }
}