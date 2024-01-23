package miu.waa.lab.service;

import miu.waa.lab.dto.request.LoginRequest;
import miu.waa.lab.dto.request.RefreshTokenRequest;
import miu.waa.lab.dto.response.LoginResponse;

public interface AuthService {
    LoginResponse login(LoginRequest loginRequest);
    LoginResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
