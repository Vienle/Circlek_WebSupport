package com.circlek.support.enpoints;

import com.circlek.support.entities.product.Mprodplu;
import com.circlek.support.entities.product.Mproduct;
import com.circlek.support.entities.product.ProductServer;
import com.circlek.support.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping(value = "/product")
@CrossOrigin
public class ProductEnpoint {
   @Autowired
   private ProductService productService;
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Object> getProduct(@RequestParam(name = "iobs") String iobs){
        HashMap<String,Object> responseServer = productService.getProductByServer(iobs);
        List<ProductServer> productServerList  = (List<ProductServer>) responseServer.get("server");

        return new ResponseEntity<>(productServerList, HttpStatus.OK);
    }
}
