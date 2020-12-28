package com.circlek.support.enpoints;

import com.circlek.support.service.MkeymapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/mkeymap")
@CrossOrigin
public class MkeymapEnpoint {

    @Autowired
    private MkeymapService mkeymapService;

    @GetMapping
    public ResponseEntity<Object> getAllMkeymap(){
        return new ResponseEntity<>(mkeymapService.getAllMkeymap(), HttpStatus.OK);
    }
}
