package com.douglasmatosdev.riodepremios.entities;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class User {
    private String documentId;
    private String name;
    private String email;
    private String cpf;
}
