package org.shyang.controller.test;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/test")
public class SampleController {

    private List<String> message = new ArrayList<>() {{
        add("test01");
        add("test02");
        add("test03");
        add("test04");
    }};


    @GetMapping("/message")
    public List<String> getAllMessages(){
        return message;
    }
}
